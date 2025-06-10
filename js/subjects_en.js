const cardsData = [
    { title: "Communications",  description: "In Communications, students explore various aspects of communication. They will investigate the foundations of communication by analyzing, applying, and designing creative works essential to the professional communications industry. This course establishes a comprehensive foundation for students interested in a post-secondary career in communications."},

    { title: "Debate",  description: "In the Debate course, students learn crucial debate terminology, speech strategies, and persuasive techniques. Students investigate rhetoric and learn to consider multiple and divergent perspectives. Throughout this course, students develop the skills necessary to execute a well-versed and effectively supported argument. This study of supporting claims with credible evidence will allow students to engage in effective persuasive discourse." },

    { title: "Probability and Statistics", description: "Students enrolled in Probability and Statistics build a strong foundation in calculating probabilities and evaluating statistics. The Probability and Statistics curriculum is designed to cover a half year of instruction but can be completed at each student's own pace. Students enrolled in the course explore representation of statistical data, working with scatter plots, analyzing statistical data using properties and theorems, and more." },

    { title: "Anatomy and Physiology",  description: "Anatomy and Physiology allows students to discover the fascinating dynamics of the human body. Students begin by exploring the history of anatomy, essential anatomical terminology, and the hierarchical organization of the human body. Next, students are introduced to basic biochemistry and cellular processes, which includes a virtual tour of the cell. Students also investigate the structure, function, hierarchy, and diseases associated with each organ system. Completion of one full year of high school Biology is required in order to understand the numerous biological concepts presented in this course." },

    { title: "Astronomy", description: "In Astronomy, students begin by discussing basic astronomical concepts and discoveries throughout history. They take an in-depth look at the first moments of the universe by studying the Big Bang. From there, they investigate the evolution of the universe, beginning with the first atoms and moving on to explore elements, stars, solar systems, and galaxies. Students gather information to determine if there is a possibility of life on other planets and in other solar systems. Students analyze the major space missions that have led to the modern study of cosmology, and they explore the possibilities of where this field may take scientists in the future." },

    { title: "Financial Literacy",  description: "In Financial Literacy, students explore aspects of personal finance. The course focuses on ways of earning income, spending, saving, investing, managing credit, and managing risk using real-world applications. These concepts will help students prepare for their financial futures." },

    { title: "Psychology", description: "In Psychology, students explore the science of explaining and controlling human behavior. Psychology plays an integral part in everyday life because all decisions, relations, and emotions are closely tied to behavior and genetics. Within this course, students look at behavior, and they consider prominent psychologists who have made impressive and monumental discoveries through testing, research projects, and proving theories. Students will study everything from the anatomy of the brain to psychological disorders." },

    { title: "Art Appreciation",  description: "In Art Appreciation, students explore visual art from the ancient world to the present day. Students investigate various topics such as the mysteries surrounding Stonehenge, the lives of famous Renaissance artists, the way celebrities influenced the Pop Art movement, and the reasons why public memorials are created. This course highlights the important connections between visual art, culture, and human history and allows students to analyze and interpret artworks. Art history comes alive as students emulate basic techniques used by well-known artists." },

    { title: "Fashion Design",  description: "Fashion Design is an advanced course for students interested in learning the intricate process of how the fashion system works. Students will study the fashion business in sequential order from concept to consumer. They will examine all of the processes involved in the industry from producing raw materials, apparel, and accessories to the retail stores that sell fashion merchandise to the public. Students learn that the decision-making process is complex and not just about the latest designers, styles, or trends of an era. In this course, students will explore the history of fashion, including the looks and creations at every era. They will discover the equipment, tools, and fabrics used to create fashion, and they will learn how technology is used in fashion. Students have an opportunity to express themselves and their style through the creation of their own fashion design sketches and mood boards. Students will learn fashion terminology and how to forecast new and upcoming fashion trends." },

    { title: "Music Appreciation",  description: "Music Appreciation stimulates personal growth when listening to music by exposing the student to a large variety of music with provided listening maps indicating applicable music terminology. Students will be able to explain personal music preference, and identify how music is impacted by technology, social values, and daily life of the composers. Students develop an understanding of composer's intent and the ability to rationalize personal interpretation of music works. Similarities and contrasts in music throughout the eras are identified as well as how previous compositions impact future compositions. This course is well suited for upper level secondary advanced students with a strong interest in music who plan on focusing in music post high school." },

    { title: "High School Health",  description: "In Health, students discover how to make conscientious decisions when attempting to improve their overall health and wellness. From healthy lifestyles, diets, and exercise to responsibilities within individual families and larger communities, topics within the health discipline are pertinent and applicable to all students. Throughout the course, students review concepts that promote safe, healthy, and active lifestyles." },

    { title: "High School Nutrition and Personal Fitness",description: "Nutrition and Personal Fitness helps students to recognize the impacts that nutritional choices and personal fitness play within their lives. Students learn practical ways to control their health through nutrition, exercise, and stress management. Students discover that physical fitness will help them to feel good." },

    { title: "Marketing", description: "Throughout the Marketing course, students discover the various ways marketing affects their lives. This course introduces students to the study and implementation of market analysis, which focuses on identifying customer needs and desires and supplying them with those exact requests. The course provides a solid foundation for students contemplating careers in marketing, advertising, or other business-related and commercial fields." },

    { title: "Advertising",  description: "Throughout the Advertising course, students discover the various ways that advertisements touch their lives. This course presents a comprehensive introduction to the field of advertising, which includes its purpose and the theory behind it. In this course, students learn to identify target markets, distinguish different types of business, and interpret the information they gather to create a winning advertisement plan. Students investigate the needs and wants of both the consumers to whom they are advertising and the companies for which they are creating the advertisement. Lessons will cover the basic skills and knowledge required to work in the advertising world and will guide students through the creation of a complete advertising plan. Students in this course are presented with a realistic idea of what a career in advertising entails." },

    { title: "Business Management",  description: "Business Management guides students through examples of their roles as wage earners, consumers, and citizens as they explore the wide, exciting world of business. Students examine topics ranging from extensive credit use to the role of government in the U.S. economy. Students are encouraged to take Introduction to Business as a prerequisite to this course, as Business Management dives deeper into the different aspects of managing a business successfully." },
    
    { title: "Career Explorations",  description: "Career Explorations allows students to investigate the necessary steps to prepare for careers that match their interests, abilities, and aptitudes. Students research various careers, their roles in society, job duties, required education and qualifications, salary, and outlook. They acquire job-seeking skills such as resume writing, interviewing, and portfolio-development skills. Students discover workplace dynamics, navigate challenging situations, and explore various techniques for advancing in their chosen career field. This course prepares students to manage the financial challenges they will face as they prepare for a career and future employment. Students will apply newly acquired knowledge and skills in a real-world experience to further solidify future career plans. Course Topics: • Career Preparation • Career Research • Career Acquisition • Understanding the Workplace • Career Retention & Advancement • Financial Literacy • Job Shadowing" },

    { title: "Life Skills", description: "Life Skills provides students with important information that will help them to lead independent and successful lives as adults. In this course, students focus on topics including personal finance, nutrition, and personal development. The useful skills students gain in this course will help them to become responsible and proactive young adults." },

    { title: "Earth Science", description: "In Earth Science, students discover the theories about how Earth first formed. They explore Earth’s history and the different geologic processes that continually take effect and help to shape the planet. Students debate the ways in which human impacts affect the Earth's climate, and they view Earth as a body within the solar system and universe. They also review Earth's renewable and finite resources. The course concludes with a virtual tour of Earth's atmosphere and oceans." }
  ];
  
  let currentPage = 1;
  const itemsPerPage = 6;
  
  function renderCards() {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const cardsToShow = cardsData.slice(start, end);
  
    cardsToShow.forEach((card, index) => {
      const div = document.createElement("div");
      div.className = "card";
  
      div.innerHTML = `
        <h4>${card.title}</h4>
        <button onclick="toggleDetail(this)">View</button>
        <div class="card-detail" style="display: none; margin-top: 10px;">
          ${card.description}
        </div>
      `;
      container.appendChild(div);
    });
  
    document.getElementById("page-indicator").textContent = currentPage;
  }
  
  function toggleDetail(button) {
    const detailDiv = button.nextElementSibling;
    if (detailDiv.style.display === "none") {
      detailDiv.style.display = "block";
      button.textContent = "Hide";
    } else {
      detailDiv.style.display = "none";
      button.textContent = "View";
    }
  }
  
  function nextPage() {
    const maxPage = Math.ceil(cardsData.length / itemsPerPage);
    if (currentPage < maxPage) {
      currentPage++;
      renderCards();
    }
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderCards();
    }
  }
  
  renderCards();
  