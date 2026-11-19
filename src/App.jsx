import React from "react";

function TeacherCard(props) {
  return (
    <div className="teacher-card">
      <div className="teacher-avatar">{props.name.charAt(0)}</div>
      <h3>{props.name}</h3>
      <p className="teacher-role">{props.designation}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
}

function App() {
  const currentHour = new Date().getHours();
  let timeOfDay = "evening";

  if (currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour < 17) {
    timeOfDay = "afternoon";
  }

  const teachers = [
    { name: "Dr. Ahmed Khan", designation: "Professor", department: "Computer Science", email: "ahmed.khan@example.edu" },
    { name: "Dr. Sara Malik", designation: "Associate Professor", department: "Computer Science", email: "sara.malik@example.edu" },
    { name: "Mr. Usman Ali", designation: "Assistant Professor", department: "Computer Science", email: "usman.ali@example.edu" },
    { name: "Ms. Ayesha Noor", designation: "Lecturer", department: "Computer Science", email: "ayesha.noor@example.edu" },
    { name: "Mr. Bilal Hussain", designation: "Lecturer", department: "Computer Science", email: "bilal.hussain@example.edu" },
    { name: "Dr. Fatima Sheikh", designation: "Assistant Professor", department: "Computer Science", email: "fatima.sheikh@example.edu" },
    { name: "Mr. Hamza Iqbal", designation: "Lecturer", department: "Computer Science", email: "hamza.iqbal@example.edu" },
    { name: "Ms. Zainab Raza", designation: "Lecturer", department: "Computer Science", email: "zainab.raza@example.edu" },
    { name: "Dr. Omar Farooq", designation: "Associate Professor", department: "Computer Science", email: "omar.farooq@example.edu" },
    { name: "Ms. Hira Shah", designation: "Lecturer", department: "Computer Science", email: "hira.shah@example.edu" }
  ];

  return (
    <div className="app">
      <header className="hero">
        <p className="lab-label">WEB DEVELOPMENT · LAB 10</p>
        <h1>React Components &amp; Props</h1>
        <p className="greeting">Good {timeOfDay}! Welcome to our Computer Science department.</p>
        <p className="intro">This page demonstrates JSX, JavaScript expressions, reusable components, and props in React.</p>
      </header>

      <main>
        <section className="faculty-section">
          <div className="section-heading">
            <div>
              <p className="section-label">OUR TEAM</p>
              <h2>Computer Science Faculty</h2>
            </div>
            <span className="faculty-count">{teachers.length} Members</span>
          </div>

          <div className="teacher-grid">
            {teachers.map(function (teacher, index) {
              return (
                <TeacherCard
                  key={index}
                  name={teacher.name}
                  designation={teacher.designation}
                  department={teacher.department}
                  email={teacher.email}
                />
              );
            })}
          </div>
        </section>
      </main>

      <footer><p>Lab 10 - React | Built with React and Vite</p></footer>
    </div>
  );
}

export default App;
