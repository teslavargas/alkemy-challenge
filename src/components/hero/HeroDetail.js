import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Hero.module.css";
import { useHistory } from "react-router-dom";

function HeroDetail(props) {
  const [state, setState] = useState();

  useEffect(() => {
    try {
      axios
        .get(
          `https://superheroapi.com/api/1155198634989290/${props.match.params.id}`
        )
        .then((res) => {
          const heros = res.data;
          setState(heros);
        });
    } catch (error) {
      console.log("ERROR " + error);
    }
  });

  var arr = [];
  state?.biography?.aliases.forEach((e) => arr.push(e));
  var array = arr.join(", ");

  var weight = state?.appearance?.weight[1].split(" ")[0];
  var height = state?.appearance?.height[1].split(" ")[0];

  var history = useHistory();

  return (
    <div className={styles.center}>
      <div id={styles.container} className="container mt-3">
        <h1>{state?.name}</h1>
        <h5 className={styles.h5}>Weight: {weight} kg.</h5>
        <h5 className={styles.h5}>Height: {height} cm.</h5>
        <h5 className={styles.h5}>Name: {state?.biography["full-name"]}.</h5>

        <h5 className={styles.h5}>Aliases: {array}.</h5>
        <h5 className={styles.h5}>
          Eye color: {state?.appearance["eye-color"]}.
        </h5>
        <h5 className={styles.h5}>
          Hair color: {state?.appearance["hair-color"]}.
        </h5>
        <h5 className={styles.h5}>Work location: {state?.work?.base}.</h5>

        <button
          id={styles.btnBack}
          className="btn btn-secondary mt-3"
          onClick={() => history.goBack()}
        >
          ← Go back
        </button>
      </div>
    </div>
  );
}

export default HeroDetail;
