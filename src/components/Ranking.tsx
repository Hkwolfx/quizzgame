import React from "react";
import { FaShare } from 'react-icons/fa';
import "./Ranking.css"; // Assurez-vous de créer ce fichier CSS

const Ranking = () => {
  return (
    <main
      style={{
        width: "40rem",
        height: "43rem",
        backgroundColor: "#ffffff",
        boxShadow: "0px 5px 15px 8px #e4e7fb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "0.5rem",
      }}
    >
      <div
        id="header"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.5rem 2rem",
        }}
      >
        <h1
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "1.7rem",
            color: "#141a39",
            textTransform: "uppercase",
          }}
        >
          Ranking
        </h1>
        <button
          className="share"
          style={{
            width: "4.5rem",
            height: "3rem",
            backgroundColor: "#f55e77",
            border: "none",
            borderBottom: "0.2rem solid #c0506a",
            borderRadius: "2rem",
            cursor: "pointer",
          }}
        >
          <FaShare color="#fff" fontSize="2rem" />
        </button>
      </div>
      <div id="leaderboard" style={{ width: "100%", position: "relative" }}>
        <div
          className="ribbon"
          style={{
            width: "42rem",
            height: "5.5rem",
            top: "-0.5rem",
            backgroundColor: "#5c5be5",
            position: "absolute",
            left: "-1rem",
            boxShadow: "0px 15px 11px -6px #7a7a7d",
          }}
        ></div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            color: "#141a39",
          }}
        >
          <tr
            style={{
              transition: "all 0.2s ease-in-out",
              borderRadius: "0.2rem",
            }}
          >
            <td
              className="number"
              style={{
                width: "1rem",
                fontSize: "2.2rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              1
            </td>
            <td
              className="name"
              style={{ textAlign: "left", fontSize: "1.2rem" }}
            >
              Lee Taeyong
            </td>
            <td
              className="points"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              258.244{" "}
              <img
                className="gold-medal"
                src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                alt="gold medal"
                style={{ height: "3rem", marginLeft: "1.5rem" }}
              />
            </td>
          </tr>
          <tr
            style={{
              transition: "all 0.2s ease-in-out",
              borderRadius: "0.2rem",
            }}
          >
            <td
              className="number"
              style={{
                width: "1rem",
                fontSize: "2.2rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              2
            </td>
            <td
              className="name"
              style={{ textAlign: "left", fontSize: "1.2rem" }}
            >
              Alex Azimov
            </td>
            <td
              className="points"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              258.200{" "}
          
            </td>
          </tr>
          <tr
            style={{
              transition: "all 0.2s ease-in-out",
              borderRadius: "0.2rem",
            }}
          >
            <td
              className="number"
              style={{
                width: "1rem",
                fontSize: "2.2rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              3
            </td>
            <td
              className="name"
              style={{ textAlign: "left", fontSize: "1.2rem" }}
            >
              Roger Road
            </td>
            <td
              className="points"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              258.141{" "}
           
            </td>
          </tr>
          <tr
            style={{
              transition: "all 0.2s ease-in-out",
              borderRadius: "0.2rem",
            }}
          >
            <td
              className="number"
              style={{
                width: "1rem",
                fontSize: "2.2rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              4
            </td>
            <td
              className="name"
              style={{ textAlign: "left", fontSize: "1.2rem" }}
            >
              Nina None
            </td>
            <td
              className="points"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              258.100{" "}
          
            </td>
          </tr>
          <tr
            style={{
              transition: "all 0.2s ease-in-out",
              borderRadius: "0.2rem",
            }}
          >
            <td
              className="number"
              style={{
                width: "1rem",
                fontSize: "2.2rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              6
            </td>
            <td
              className="name"
              style={{ textAlign: "left", fontSize: "1.2rem" }}
            >
              Tiny Tina
            </td>
            <td
              className="points"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              258.050{" "}
        
            </td>
          </tr>
        </table>
        {/* Boutons ici */}
      </div>
    </main>
  );
};

export default Ranking;
