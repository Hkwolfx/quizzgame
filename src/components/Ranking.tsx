import React from "react";
import { FaShare } from "react-icons/fa";
import "./Ranking.css";



const Ranking = ({ meilleursJoueurs }: { meilleursJoueurs: any[] }) => {
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
            marginLeft: "230px",
            textTransform: "uppercase",
          }}
        >
          Ranking
        </h1>
        <button
          className="share"
          style={{
            textTransform: "uppercase",
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
      <div id="leaderboard" style={{ width: "60%", position: "relative", marginLeft: "200px;" }}>
        <div
          className="ribbon"
          style={{
            width: "34rem",
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
            // marginLeft: "13rem",
            width: "133%",
            textTransform: "uppercase",
            fontWeight: "bold",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            color: "#141a39",
            
          }}
        >
          {meilleursJoueurs.slice(0, 3).map((joueur, index) => (
            <tr
              key={joueur.userId}
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
                {index + 1}
              </td>
              <td
                className="name"
                style={{ textAlign: "left", fontSize: "1.2rem" }}
              >
                 <img
                  src={joueur.profilePictureUrl || "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/edd12aab059d878ba5ca47a380016436~c5_100x100.webp?lk3s=a5d48078&x-expires=1708516800&x-signature=pKfnUMAfKukSqhUCa7PAgvIPdIg%3D" }
                  alt="Profile"
                  style={{ height: "2rem", marginRight: "0.5rem", borderRadius: "50%" }} // Ajustez selon votre design
                />
                {joueur.nickname}
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
                {joueur.score}
                {index === 0 && (
                  <img
                    className="gold-medal"
                    src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                    alt="gold medal"
                    style={{ height: "3rem", marginLeft: "1.5rem" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </main>
  );
};



export default Ranking;
