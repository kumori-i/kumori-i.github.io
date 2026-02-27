import React, { useRef, useEffect, useState } from "react";
import InputJp from "./InputJp";

let currentDir = "cd";

function InputCheck({ input }) {
  const inputRef = useRef(null);

  const previousDir = currentDir;

  if (
    input === "cd projects" ||
    input === "cd about" ||
    input === "cd contact" ||
    input === "cd" ||
    input === "cd .."
  ) {
    if (currentDir === "cd" && input !== "cd" && input !== "cd ..") {
      currentDir = input.split(" ")[1];
    } else if (input === "cd") {
      console.log("here");
      currentDir = input;
    } else if (input === "cd ..") {
      currentDir = "cd";
    }
  }

  useEffect(() => {
    if (
      (input === "clear" && inputRef.current) ||
      (input === "jp" && inputRef.current)
    ) {
      // Scroll the container to the bottom where input is rendered
      inputRef.current.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, [input]);

  if (input === "-h" || input === "-help") {
    return (
      <>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <br />
        <b> commands: </b>
        <br />
        cd: return to command directory
        <br />
        clear: clear the terminal
        <br />
        ls: list possible folders to cd into
        <br />
        jp: switch to japanese (everthing has been translated by me) ❤️
        {/* <br />
        projects: enters into projects directory
        <br />
        contact: enter into contact directory */}
        <br />
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <br />
        <InputEn dir={currentDir} />
      </>
    );
  } else if (input === "cd" || (input === "cd .." && previousDir !== "cd")) {
    return (
      <>
        <InputEn dir="cd" />
      </>
    );
  } else if (input === "ls") {
    if (currentDir === "cd") {
      return (
        <>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
          projects :: contact :: about
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
          <br />
          <InputEn dir={currentDir} />
        </>
      );
    } else {
      return (
        <>
          <InputEn dir={currentDir} />
        </>
      );
    }
  } else if (input === "clear") {
    return (
      <div style={{ height: "100vh", overflowY: "auto" }}>
        <div ref={inputRef}>
          <InputEn />
        </div>
      </div>
    );
  } else if (input === "jp") {
    return (
      <>
        <div style={{ height: "100vh", overflowY: "auto" }}>
          <div ref={inputRef}>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <br />
            こにちわ!
            <br />
            わたしのえいさいとえようこそ!
            <br />
            ここではわたしのいぜんのぷろじぇくとやわたしじしんにかするじょほをみつけることができくす
            <br />
            かいしするには、「-h」または「-help」とにゅりょくしてじっこかのなこまんどをひょじします
            <br />
            <br />
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <InputJp />
          </div>
        </div>
      </>
    );
  } else if (
    input === "cd projects" &&
    currentDir === "projects" &&
    previousDir !== "projects"
  ) {
    return (
      <>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <b> CSCE 482 Capstone: Collegiate Scouting Platform </b>
        <br />
        Description: Built a full-stack scouting platform with React, Express,
        Supabase, JWT/Google OAuth auth, and provider-driven AI generation
        support.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/team-collegiate-csce482-capstone"
          target="_blank"
          rel="noopener noreferrer"
        >
          team-collegiate-csce482-capstone
        </a>
        <br />
        <br />
        <br />
        <b> Discord Bots Workspace </b>
        <br />
        Description: Built a modular Discord bot workspace. Current bot supports
        RSS ingestion and Ollama-based news summarization.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/discord-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          discord-server
        </a>
        <br />
        <br />
        <br />
        <b> GiveCoin DApp </b>
        <br />
        Description: Developed a blockchain-style donation/token DApp using
        Truffle/Ganache with a React frontend and smart contracts.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/givecoin-dapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          givecoin-dapp
        </a>
        <br />
        <br />
        <br />
        <b> The Myth of Oakrylon </b>
        <br />
        Description: 2D tile-based game prototype built with Lua and LÖVE,
        including state-driven gameplay and custom map assets.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/the-myth-of-oakrylon"
          target="_blank"
          rel="noopener noreferrer"
        >
          the-myth-of-oakrylon
        </a>
        <br />
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <InputEn dir="projects" />
      </>
    );
  } else if (
    input === "cd about" &&
    currentDir === "about" &&
    previousDir !== "about"
  ) {
    return (
      <>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <br />
        Hi there! I'm currently a senior at Texas A&M University, pursuing a
        degree in Computer Science (WHOOP!). When I’m not coding or diving into
        a new software project, you’ll likely find me playing Valorant, watching
        my favorite anime—Sword Art Online—or hanging out with friends.
        <br />
        <br />
        I'm passionate about video games, software development, web design, and,
        of course, anime! My online life is a blend of these passions, and this
        space showcases my projects, contributions, and technical skills.
        <br />
        <br />
        Thanks for stopping by—hope you enjoy exploring my work!
        <br />
        <br />
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <InputEn dir="about" />
      </>
    );
  } else if (
    input === "cd contact" &&
    currentDir === "contact" &&
    previousDir !== "contact"
  ) {
    return (
      <>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <b> Ethan Rendell </b>
        <br />
        <br />
        <b> Email: </b>{" "}
        <a
          style={{ color: "white" }}
          href="mailto:ethan.rendell@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ethan.rendell@outlook.com
        </a>
        <br />
        <b> Phone: </b> +1 (607)-379-1042
        <br />
        <b> GitHub: </b>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/kumori-i
        </a>
        <br />
        <b> LinkedIn: </b>{" "}
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/ethan-rendell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/ethan-rendell/
        </a>
        <br />
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <InputEn dir="contact" />
      </>
    );
  } else {
    return (
      <>
        zsh: command not found: {input}
        <br />
        <InputEn dir={currentDir} />
      </>
    );
  }
}

function InputEn({ dir = "" }) {
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  var sl;

  switch (dir) {
    case "contact":
      sl = "user@kumori-i contact % ";
      break;
    case "projects":
      sl = "user@kumori-i projects % ";
      break;
    case "about":
      sl = "user@kumori-i about % ";
      break;
    default:
      sl = "user@kumori-i ~ % ";
      break;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setOutput(InputCheck(input));
    setIsSubmitted(true);
  };
  return (
    <>
      {sl}
      <form className="f" onSubmit={handleSubmit}>
        <input
          className="i"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSubmitted}
          autoFocus="autofocus"
        />
      </form>
      <br />
      {isSubmitted && <InputCheck input={input} />}
    </>
  );
}

export default InputEn;
