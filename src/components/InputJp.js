import React, { useRef, useEffect, useState } from "react";
import InputEn from "./InputEn";

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
      currentDir = input;
    } else if (input === "cd ..") {
      currentDir = "cd";
    }
  }

  useEffect(() => {
    if (
      (input === "clear" && inputRef.current) ||
      (input === "en" && inputRef.current)
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
        <b> こまんど: </b>
        <br />
        cd: こまんどでぃれくとりにもどる
        <br />
        ls: 「cd」するふぉるだれすどする
        <br />
        clear: たーみなるをクリアする
        <br />
        en: えいごにきりかえる「わたしはすべてをほんやくしました」❤️
        {/* <br />
        projects: ぷろじぇくとディれくとりにはいる
        <br />
        contact: こんたくとディれくとりにはいる */}
        <br />
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <br />
        <InputJp dir={currentDir} />
      </>
    );
  } else if (input === "cd" || (input === "cd .." && previousDir !== "cd")) {
    return (
      <>
        <InputJp dir="cd" />
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
          <InputJp dir={currentDir} />
        </>
      );
    } else {
      return (
        <>
          <InputJp dir={currentDir} />
        </>
      );
    }
  } else if (input === "clear") {
    return (
      <div style={{ height: "100vh", overflowY: "auto" }}>
        <div ref={inputRef}>
          <InputJp dir={currentDir} />
        </div>
      </div>
    );
  } else if (input === "en") {
    return (
      <>
        <div style={{ height: "100vh", overflowY: "auto" }}>
          <div ref={inputRef}>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <br />
            Hello!
            <br />
            Welcome to my website!
            <br />
            Here you can find information regarding my previous projects or
            about me.
            <br />
            To start type -h or -help to view potential commands
            <br />
            <br />
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <InputEn />
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
        せつめい: React/Express/Supabase をつかって、JWT/Google OAuth と AI
        せいせいきのうをもつフルスタック・スカウティング
        プラットフォームをかいはつしました。
        <br />
        <> れぽ: </>
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
        せつめい: もじゅーるかされた Discord bot
        かいはつワークスペース。げんざいは RSS + Ollama によるニュースようやく
        bot をうんようしています。
        <br />
        <> れぽ: </>
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
        せつめい: Truffle/Ganache と React をつかったブロックチェーンけいの
        donation/token DApp を かいはつしました。
        <br />
        <> れぽ: </>
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
        せつめい: Lua + LÖVE をつかった 2D
        たいるべーすげーむのぷろとたいぷ。すてーとかんりと
        まっぷしさんをふくみます。
        <br />
        <> れぽ: </>
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
        <InputJp dir="projects" />
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
        こにちは!はたしはげんざい「Texas
        A&M」だいかくの3ぬんせいで、こんぷゅーたさいえんすのがくいをしゅとくちゅーです「WHOOP!」。
        こーでいんぐをしていないときやあたらしーそふとーえあぷろじぇくとにとりくんでいないときは「Valorant」
        をぷれいしたりおきにいりのあにめ「そーどあーとおんらいん」をみたりともだちとあそんだりしています。
        <br />
        <br />
        私はビデオゲーム、そふとーえあかいはつえぶでざぃん、そしてもちろんあにめにじょーぬつをそそいでいます。わたしのおんらいんせいかつはこれらのじょーめつのゆーごーであり、このすぺーすではわたしのぷろじぇくと、こーけんぎじゅつすきるをしょーかいしています。
        <br />
        <br />
        わたしのさくしんをぞらんになったいただきありがとーございます!
        <br />
        <br />
        ------------------------------------------------------------------------------------------------------------------------------------------------------------
        <br />
        <InputJp dir="about" />
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
        <InputJp dir="contact" />
      </>
    );
  } else {
    console.log("else");
    return (
      <>
        zsh: command not found: {input}
        <br />
        <InputJp dir={currentDir} />
      </>
    );
  }
}

function InputJp({ dir = "" }) {
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

export default InputJp;
