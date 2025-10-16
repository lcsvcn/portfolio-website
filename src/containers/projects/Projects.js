import { useState, useEffect, lazy, Suspense } from "react";
import { ApolloClient, InMemoryCache, gql, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { openSource, socialMediaLinks } from "../../portfolio";

function getRepoData(callback) {
  const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${openSource.githubConvertedToken}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
      {
      user(login: "${openSource.githubUserName}") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
      `,
    })
    .then((result) => {
      callback(result.data.user.pinnedItems.edges);
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      callback("Error");
      console.log("Because of this Error, nothing is shown in place of Projects section. Projects section not configured");
    });
}



export default function Projects() {
  const GithubRepoCard = lazy(() => import('../../components/githubRepoCard/GithubRepoCard'));
  const FailedLoading = () => null ;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData(setrepoFunction);
  }, [setrepoFunction]);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (!(typeof repo === 'string' || repo instanceof String)){
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, _i) => {
            return <GithubRepoCard repo={v} key={v.node.id} />;
          })}
        </div>
        <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
      </div>
    </Suspense>
  );
} else{
    return(<FailedLoading />);
  }
}
