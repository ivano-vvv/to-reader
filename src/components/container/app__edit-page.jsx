import React from "react";
import EditPage from "../display/edit-page";
import { Redirect } from "react-router-dom";

export default function EditPageContainer(props) {
  if (!props.location.state || !props.location.state.id) {
    return <Redirect to="/home" />;
  } else {
    return <EditPage id={props.location.state.id} />;
  }
}
