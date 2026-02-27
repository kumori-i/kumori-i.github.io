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
        <b> '24 Y86 Assembly Circuit </b>
        <br />
        Description: Developed a basic y86 circuit to run programs for simple
        mathematical calculations and recurrsive functions.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/tamu-y86-assembly-circuit-24"
          target="_blank"
          rel="noopener noreferrer"
        >
          tamu-y86-assembly-circuit-24
        </a>
        <br />
        <br />
        <br />
        <b> '24 Datathon Webscraping Challenge </b>
        <br />
        Description: Developed a web scraper using Selenium and BeautifulSoup to
        solve 4 levels of challenges for hidden information.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/tamu-datathon-webscraping-24"
          target="_blank"
          rel="noopener noreferrer"
        >
          tamu-datathon-webscraping-24
        </a>
        <br />
        <br />
        <br />
        <b> '23 Datathon Bots Race </b>
        <br />
        Description: Developed an efficient algorithm for a bot to follow a line
        based on input sensors.
        <br />
        <> Repo: </>
        <a
          style={{ color: "white" }}
          href="https://github.com/kumori-i/tamu-datathon-bots-race-23"
          target="_blank"
          rel="noopener noreferrer"
        >
          tamu-datathon-bots-race-23
        </a>
        <br />
        <br />
        <br />
        <b> The Myth of Oakrylon </b>
        <br />
        Description: A basic development of a 2D tile based game. Utilizes Lua &
        Love and basic 2 dimensional movement.
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
