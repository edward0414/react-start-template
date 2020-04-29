import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { checkForCached } from "./cache-handler";
import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL } from "../reducers/componentState";
import { LOGIN_SUCC } from "../reducers/login";

const mapStateToProps = state => ({
  userType: state.login.userType,
  token: state.login.token,
  userId: state.login.userId
});

const mapDispatchToProps = dispatch => ({
  openLoginModal: () => dispatch({ type: OPEN_LOGIN_MODAL }),
  closeLoginModal: () => dispatch({ type: CLOSE_LOGIN_MODAL }),
  setLoginFromCookie: ({ userId, token, userType, username, allowedOperations }) =>
    dispatch({
      type: LOGIN_SUCC,
      payload: { userId, userType, token, username, allowedOperations }
    })
});

export const authenticationWrapper = WrappedComponent => {
  function AuthenticationWrapper(props) {
    const checkLoginCache = () => {
      const cachedItems = checkForCached({ name: "userLogin" });

      return !!cachedItems;
    };

    const checkIfLoggedIn = ({ userType, token, userId }) => {
      return !!userType && !!token && !!userId;
    };

    // helper to setUserFromCached
    const setUserFromCached = () => {
      const cachedItems = checkForCached({ name: "userLogin" });

      const { userId, token, userType, username, allowedOperations } = cachedItems;

      props.setLoginFromCookie({
        userId,
        token,
        userType,
        username,
        allowedOperations
      });
    };

    useEffect(() => {
      const loggedInCurrently = checkIfLoggedIn({
        userType: props.userType,
        token: props.token,
        userId: props.userId
      });
      const checkLogin = checkLoginCache();

      if (!checkLogin && !loggedInCurrently) {
        props.openLoginModal();
      } else if (checkLogin) {
        setUserFromCached();
      } else if (loggedInCurrently) {
        props.closeLoginModal();
      }
    }, [userType, token, userId]);

    return <WrappedComponent {...this.props} />;
  }

  AuthenticationWrapper.prototype = {
    userType: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    openLoginModal: PropTypes.func,
    closeLoginModal: PropTypes.func
  };

  return AuthenticationWrapper;
};

export default component =>
  connect(mapStateToProps, mapDispatchToProps)(authenticationWrapper(component));
