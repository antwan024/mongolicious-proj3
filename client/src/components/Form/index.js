import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (

    <div>
        <input {...props }  />
    </div>

 );
}


export function FormBtn(props) {
  return (
    // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //   {props.children}
    // </button>

    // <a {...props} class="waves-effect waves-light btn" ><i class="material-icons left">cloud</i>{props.children}</a>
    <a {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children} </a>
  );
}


export function CardBtn({props}) {

  return(
    <a className="btn-floating halfway-fab waves-effect waves-light red">
    <i
      className="material-icons"
      {...props.children}
    >
      add
    </i>
  </a>


  );
}

export function CalendarDate(props) {
  return(
    <div>
      <input {...props} type="text" className="datepicker"></input>
      <script src="../misc/jquery"></script>
    </div>


    
      
  ); 
}



