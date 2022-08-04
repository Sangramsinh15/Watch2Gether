import React, { useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/UserRegistration/LogIn/index";
import Register from "./containers/UserRegistration/Register/index";
import AuthContext from "./context/AuthContext";
// import UserContext from "./context/UserContext";
import "./App.css";
import HomePage from "./views/HomePage";
import ContentPage from "./views/ContentPage";
import Post from "./containers/Post";
import PostPage from "./containers/PostPage";
import WatchGroupPage from "./views/WatchGroupPage";
import Landing from "./views/LandingPage";
import axios from "./axios";
import CalendarComp from "./components/Calendar";
import UserInfo from "./views/UserInfoPage";
import CreatePostPage from "./containers/CreatePostPage";
import requests from "./requests";

function Router() {
  const { loggedIn, user } = useContext(AuthContext);
  const [search, setSearch] = useState([]);

  const fetchSearchResults = (value, type) => {
    if (value === "") {
      setSearch([]);
    } else {
      if (type === "search") {
        axios
          .get(
            `https://api.themoviedb.org/3/search/multi?api_key=e8ac04d8bb842037907ebb32aa9337a5&language=en-US&query=${value}`
          )
          .then((res) => {
            setSearch(res.data.results);
          });
      } else if (type === "MOVIES") {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=e8ac04d8bb842037907ebb32aa9337a5&language=en-US&page=1`
          )
          .then((res) => {
            setSearch(res.data.results);
          });
      } else {
        axios.get(`${requests.fetchTrendingTV}`).then((res) => {
          setSearch(res.data.results);
        });
      }
    }
  };

  const clearSearchResults = () => {
    setSearch([]);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/home"
          render={() => {
            return (
              <HomePage
                search={search}
                fetchSearchResults={fetchSearchResults}
                clearSearchResults={clearSearchResults}
              />
            );
          }}
        />

        <Route
          path="/contentPage"
          render={(routeProps) => {
            return (
              <ContentPage
                {...routeProps}
                search={search}
                fetchSearchResults={fetchSearchResults}
                clearSearchResults={clearSearchResults}
              />
            );
          }}
        />

        <Route
          exact
          path="/userInfo"
          render={() => {
            return (
              <UserInfo
                search={search}
                fetchSearchResults={fetchSearchResults}
                clearSearchResults={clearSearchResults}
                user={user}
              />
            );
          }}
        />

        <Route
          exact
          path="/post"
          render={() => {
            return (
              <Post
                search={search}
                fetchSearchResults={fetchSearchResults}
                clearSearchResults={clearSearchResults}
              />
            );
          }}
        />

        <Route
          exact
          path="/postPage"
          render={() => {
            return (
              <PostPage
                search={search}
                fetchSearchResults={fetchSearchResults}
                clearSearchResults={clearSearchResults}
              />
            );
          }}
        />

        <Route
          exact
          path="/watchGroup"
          render={() => {
            return (
              <WatchGroupPage
                search={search}
                fetchSearchResults={fetchSearchResults}
                clearSearchResults={clearSearchResults}
                user={user}
              />
            );
          }}
        />

        <Route exact path="/calendar" component={CalendarComp} />
        <Route exact path="/CreatePostPage" component={CreatePostPage} />
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/home" component={HomePage} />
          </>
        )}
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
/**
 * The default export as 'router'
 */
export default Router;
