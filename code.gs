function createProfessionalCyberSecuritySlides() {
  const presentation = SlidesApp.create("Professional Cybersecurity Presentation");
  presentation.getSlides()[0].remove();

  // Background color theme (rotating)
  const bgColors = ["#0f1b2a", "#1a1a1a", "#2c3e50", "#34495e", "#22313f"];

  // Public image URLs (feel free to replace with your own)
  const imageUrls = [
    "https://www.gstatic.com/classroom/themes/img_code.jpg",
    "https://cdn-icons-png.flaticon.com/512/841/841364.png",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    "https://cdn-icons-png.flaticon.com/512/3306/3306613.png",
    "https://cdn-icons-png.flaticon.com/512/2891/2891229.png"
  ];

  // Topics
  const topics = [
    { title: "1. Introduction to Cybersecurity", bullets: ["What is Cybersecurity?", "Importance in modern world", "Threat landscape"] },
    { title: "2. Types of Cyber Attacks", bullets: ["Phishing", "Malware", "DDoS Attacks", "Man-in-the-Middle"] },
    { title: "3. Cybersecurity Goals", bullets: ["Confidentiality", "Integrity", "Availability (CIA Triad)"] },
    { title: "4. Network Security", bullets: ["Firewalls", "Intrusion Detection Systems (IDS)", "VPNs"] },
    { title: "5. Application Security", bullets: ["Secure coding", "Penetration testing", "Web app firewalls"] },
    { title: "6. Endpoint Security", bullets: ["Antivirus", "Device encryption", "Patch management"] },
    { title: "7. Social Engineering", bullets: ["Psychological manipulation", "Phishing examples", "Defense strategies"] },
    { title: "8. Cloud Security", bullets: ["Shared responsibility model", "Access control", "Data encryption"] },
    { title: "9. Cyber Laws and Ethics", bullets: ["Data protection laws", "Cybercrime penalties", "Ethical hacking"] },
    { title: "10. Career in Cybersecurity", bullets: ["Roles (Analyst, Engineer, CISO)", "Certifications", "Job demand"] }
  ];

  // Loop through topics
  for (let i = 0; i < topics.length; i++) {
    const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);

    // Background
    slide.getBackground().setSolidFill(bgColors[i % bgColors.length]);

    // Title
    const titleShape = slide.getShapes()[0];
    titleShape.getText().setText(topics[i].title);
    titleShape.getText().getTextStyle()
      .setFontFamily("Poppins")
      .setFontSize(28)
      .setForegroundColor("#ffffff")
      .setBold(true);

    // Bullets
    const bulletShape = slide.getShapes()[1];
    bulletShape.getText().setText(topics[i].bullets.join('\n'));
    bulletShape.getText().getTextStyle()
      .setFontFamily("Roboto")
      .setFontSize(18)
      .setForegroundColor("#ecf0f1");

    // Insert image
    const imgUrl = imageUrls[i % imageUrls.length];
    const image = slide.insertImage(imgUrl);
    image.setHeight(100);
    image.setWidth(100);
    image.setLeft(450);
    image.setTop(50);
  }

  Logger.log("Presentation created: " + presentation.getUrl());
}


