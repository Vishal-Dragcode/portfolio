import jsPDF from "jspdf";

export const generateResumePDF = () => {
  // Create new PDF document
  const doc = new jsPDF();

  // Define colors
  const primaryColor = [255, 106, 0]; // Orange #ff6a00
  const accentColor = [251, 191, 36]; // Yellow #fbbf24
  const textColor = [0, 0, 0]; // Black
  const grayColor = [107, 114, 128]; // Gray

  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  // Helper function to add section header
  const addSectionHeader = (title, icon = "") => {
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin, yPosition);
    yPosition += 2;
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;
  };

  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace = 20) => {
    if (yPosition + requiredSpace > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // ===== HEADER SECTION =====
  doc.setFontSize(24);
  doc.setTextColor(...primaryColor);
  doc.setFont("helvetica", "bold");
  doc.text("VISHAL LODHE", margin, yPosition);
  yPosition += 8;

  doc.setFontSize(12);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "normal");
  doc.text("MERN Stack Developer | AWS Basics", margin, yPosition);
  yPosition += 10;

  // Contact Information
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  const contactInfo = [
    "📧 vishallodhe444@gmail.com",
    "🔗 github.com/Vishal6563",
    "💼 linkedin.com/in/vishal-lodhe-126631265",
  ];

  contactInfo.forEach((info) => {
    doc.text(info, margin, yPosition);
    yPosition += 5;
  });

  yPosition += 5;

  // ===== PROFESSIONAL SUMMARY =====
  addSectionHeader("PROFESSIONAL SUMMARY");
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "normal");
  const summary =
    "MERN Stack Developer with 1+ year of hands-on experience in building scalable and responsive web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in API integration, state management with Redux Toolkit, and writing clean, maintainable code while collaborating effectively in team-driven environments.";
  const summaryLines = doc.splitTextToSize(summary, contentWidth);
  doc.text(summaryLines, margin, yPosition);
  yPosition += summaryLines.length * 5 + 8;

  // ===== EXPERIENCE =====
  checkPageBreak(40);
  addSectionHeader("EXPERIENCE");

  doc.setFontSize(12);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text("Junior Software Developer", margin, yPosition);
  yPosition += 6;

  doc.setFontSize(10);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "normal");
  doc.text("Skramby Technology", margin, yPosition);
  yPosition += 5;

  doc.setTextColor(...accentColor);
  doc.setFont("helvetica", "italic");
  doc.text("Jan 2025 – Present", margin, yPosition);
  yPosition += 7;

  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "normal");
  const experiencePoints = [
    "Developed and maintained scalable web applications using MERN stack and Next.js with focus on performance, SEO, and responsive UI.",
    "Built reusable React components, integrated REST APIs, and managed state using Redux Toolkit to deliver smooth user experiences.",
    "Collaborated with cross-functional teams to implement features, resolve bugs, and improve application quality following best coding practices.",
  ];

  experiencePoints.forEach((point) => {
    const lines = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(lines, margin + 3, yPosition);
    yPosition += lines.length * 4.5 + 2;
  });

  yPosition += 5;

  // ===== PROJECTS =====
  checkPageBreak(50);
  addSectionHeader("FEATURED PROJECTS");

  // Project 1: Women Empowering Management
  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text("Women Empowering Management", margin, yPosition);

  doc.setFontSize(8);
  doc.setTextColor(...accentColor);
  doc.setFont("helvetica", "italic");
  doc.text("(womanej.com)", margin + 75, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "italic");
  doc.text("E-commerce Application", margin, yPosition);
  yPosition += 6;

  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "normal");
  const project1Points = [
    "Built a full-stack e-commerce web application using Next.js, Node.js, Express.js, and MongoDB.",
    "Implemented key modules such as product listing, user authentication, cart management, and order workflow.",
    "Integrated REST APIs for smooth data handling and real-time updates.",
    "Optimized the application for responsive UI, performance, and scalable backend structure.",
  ];

  project1Points.forEach((point) => {
    const lines = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(lines, margin + 3, yPosition);
    yPosition += lines.length * 4.5 + 1;
  });

  yPosition += 5;
  checkPageBreak(40);

  // Project 2: ChangXpert
  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text("ChangXpert", margin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "italic");
  doc.text("Online Classes & Courses Platform", margin, yPosition);
  yPosition += 6;

  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "normal");
  const project2Points = [
    "Developed a full-stack course platform where users can explore and enroll in training programs.",
    "Built responsive and dynamic UI using React.js / Next.js for smooth navigation and user flow.",
    "Created and integrated REST APIs using Node.js and Express.js for course and user management.",
    "Managed database operations using MongoDB with structured schema and optimized queries.",
  ];

  project2Points.forEach((point) => {
    const lines = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(lines, margin + 3, yPosition);
    yPosition += lines.length * 4.5 + 1;
  });

  yPosition += 5;
  checkPageBreak(40);

  // Project 3: Suraj Innovations
  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text("Suraj Innovations", margin, yPosition);

  doc.setFontSize(8);
  doc.setTextColor(...accentColor);
  doc.setFont("helvetica", "italic");
  doc.text("(surajinnovations.com)", margin + 45, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "italic");
  doc.text("Static Business Website", margin, yPosition);
  yPosition += 6;

  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "normal");
  const project3Points = [
    "Developed a responsive static business website using React.js with clean UI and modern layout.",
    "Created reusable components and maintained proper folder structure for better code management.",
    "Implemented smooth navigation, optimized assets, and ensured mobile-friendly design.",
  ];

  project3Points.forEach((point) => {
    const lines = doc.splitTextToSize("• " + point, contentWidth - 5);
    doc.text(lines, margin + 3, yPosition);
    yPosition += lines.length * 4.5 + 1;
  });

  yPosition += 5;

  // ===== EDUCATION =====
  checkPageBreak(35);
  addSectionHeader("EDUCATION");

  doc.setFontSize(11);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text(
    "Bachelor of Engineering (B.E.) - Computer Engineering",
    margin,
    yPosition,
  );
  yPosition += 5;

  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Shree Chhatrapati Shivaji Maharaj College of Engineering, Ahilyanagar",
    margin,
    yPosition,
  );
  yPosition += 5;

  doc.setTextColor(...accentColor);
  doc.setFont("helvetica", "italic");
  doc.text(
    "2019 – 2023 | CGPA: 7.55 (1st class with distinction)",
    margin,
    yPosition,
  );
  yPosition += 8;

  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text("Higher Secondary Certificate (HSC)", margin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  doc.setFont("helvetica", "normal");
  doc.text("Maharashtra State Board | 2019", margin, yPosition);
  yPosition += 10;

  // ===== SKILLS =====
  checkPageBreak(50);
  addSectionHeader("TECHNICAL SKILLS");

  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "normal");

  const skills = [
    { name: "Problem Solving", level: 90 },
    { name: "React.js & Next.js", level: 90 },
    { name: "Node.js & Express.js", level: 85 },
    { name: "Git And GitHub", level: 100 },
    { name: "MongoDB & SQL", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Jenkins/CodeBuild", level: 60 },
    { name: "Amazon Web Services", level: 70 },
  ];

  skills.forEach((skill, index) => {
    if (index % 2 === 0 && index > 0) {
      yPosition += 6;
    }

    const xPos = index % 2 === 0 ? margin : pageWidth / 2 + 5;
    const skillWidth = pageWidth / 2 - margin - 10;

    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.text(skill.name, xPos, yPosition);

    // Skill bar
    const barY = yPosition + 2;
    const barHeight = 3;

    // Background bar
    doc.setFillColor(220, 220, 220);
    doc.rect(xPos, barY, skillWidth, barHeight, "F");

    // Skill level bar
    doc.setFillColor(...accentColor);
    doc.rect(xPos, barY, (skillWidth * skill.level) / 100, barHeight, "F");

    if (index % 2 === 1) {
      yPosition += 6;
    }
  });

  yPosition += 10;

  // ===== TECHNOLOGIES =====
  checkPageBreak(30);
  addSectionHeader("TECHNOLOGIES & TOOLS");

  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.setFont("helvetica", "bold");
  doc.text("Frontend:", margin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const frontend =
    "HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Material Design, React.js, Next.js, Angular";
  const frontendLines = doc.splitTextToSize(frontend, contentWidth);
  doc.text(frontendLines, margin, yPosition);
  yPosition += frontendLines.length * 4.5 + 5;

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Backend:", margin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const backend = "Node.js, Express.js, MongoDB, SQL, MySQL, PostgreSQL";
  const backendLines = doc.splitTextToSize(backend, contentWidth);
  doc.text(backendLines, margin, yPosition);
  yPosition += backendLines.length * 4.5 + 5;

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Tools:", margin, yPosition);
  yPosition += 5;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const tools = "Git, GitHub, REST APIs, MVC Architecture, Docker, AWS";
  const toolsLines = doc.splitTextToSize(tools, contentWidth);
  doc.text(toolsLines, margin, yPosition);

  // Save the PDF
  doc.save("Vishal_Lodhe_Resume.pdf");
};
