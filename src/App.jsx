const App = () => {
  const mySkills = [
    {
      name: "JavaScript",
      comfort: 9,
      frontEnd: true,
      backend: true,
    },
    {
      name: "CSS",
      comfort: 8,
      frontEnd: true,
      backend: false,
    },
    {
      name: "HTML",
      comfort: 10,
      frontEnd: true,
      backend: false,
    },
  ];

  const skills = mySkills.map((skill, index) => (
    <li key={index} style={skillStyle}>
      {" "}
      {skill.name}: compfort {skill.comfort}{" "}
      {skill.frontEnd ? "frontEnd" : null} {skill.backend ? "backEnd" : null}
    </li>
  ));
  return (
    <>
      <div>
        <h1>Skills</h1>
        <ul>{skills}</ul>
      </div>
    </>
  );
};

export default App;
