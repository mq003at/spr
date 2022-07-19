import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Extra() {
  const [apiRes, setApiRes] = useState(null);

  const callApi = () => {
    fetch("/test")
    .then((res) => res.text())
    .then((res) => setApiRes(res))
  }

  useEffect(() => {
    callApi()
  }, []);

  useEffect(() => {
    console.log(apiRes)
  }, [apiRes]);

  return (
    <div className="extra">
      <div className="extra title">EXTRA</div>
      <p>{apiRes ? apiRes : "Loading..."}</p>
    </div>
  );
}

export default Extra;
