import React from "react";

function Child2(props) {
  const showPrivateData = true;

  return (
    <div>

      <div>
        
        {showPrivateData ? <p>This is private jdashfkgskskjs34</p>: <></> }
        {showPrivateData &&  <p>This is private jdashfkgskskjs34</p>}

      </div>

      Count Inside Child2: {props.countFromParent}
      <button onClick={props.uploadData}>Upload Data</button>
    </div>
  );
}

export default Child2;
