const cardsData = [
    { title: "Communications",  description: "Communications giúp học sinh khám phá các khía cạnh đa dạng của giao tiếp. Các em sẽ nghiên cứu nền tảng của giao tiếp thông qua việc phân tích, ứng dụng và thiết kế các tác phẩm sáng tạo cần thiết cho ngành truyền thông chuyên nghiệp. Khóa đào tạo này xây dựng một nền tảng toàn diện cho học sinh quan tâm đến sự nghiệp sau trung học trong lĩnh vực truyền thông."},
    { title: "Debate",  description: "Debate giúp học sinh phát triển kỹ năng tranh biện thông qua việc tìm hiểu các thuật ngữ, chiến lược diễn thuyết và kỹ thuật thuyết phục. Học sinh được rèn luyện khả năng nhìn nhận vấn đề từ nhiều góc độ, xây dựng lập luận chặt chẽ và sử dụng bằng chứng đáng tin cậy. Khóa đào tạo này giúp học sinh nâng cao tư duy phản biện, khả năng trình bày và tự tin tham gia vào các cuộc tranh luận một cách hiệu quả và thuyết phục." },
    { title: "Probability and Statistics", description: "Probability and Statistics giúp học sinh xây dựng nền tảng vững chắc trong việc tính toán xác suất và đánh giá thống kê. Khóa đào tạo Xác suất và Thống kê được thiết kế để học sinh khám phá cách trình bày dữ liệu thống kê, làm việc với biểu đồ phân tán, phân tích dữ liệu thống kê bằng cách sử dụng các thuộc tính và định lý, và nhiều hơn nữa." },
    { title: "Earth Science",  description: "Earth Science giúp học sinh tìm hiểu về sự hình thành và lịch sử Trái Đất, cùng các quá trình địa chất đang định hình hành tinh. Học sinh khám phá tác động của con người đến khí hậu, xem xét Trái Đất trong bối cảnh Hệ Mặt Trời và vũ trụ. Khóa đào tạo này còn phân tích các nguồn tài nguyên tái tạo và hữu hạn. Kết thúc khóa học, học sinh tham gia chuyến tham quan ảo về bầu khí quyển và đại dương, củng cố kiến thức đã học." },
    { title: "Anatomy and Physiology",  description: "Anatomy and Physiology giúp học sinh khám phá cấu trúc và hoạt động của cơ thể người. Khóa đào tạo bắt đầu với lịch sử giải phẫu, thuật ngữ chuyên ngành và tổ chức phân cấp của cơ thể. Học sinh tìm hiểu sinh hóa cơ bản, quá trình tế bào qua chuyến tham quan ảo, đồng thời nghiên cứu chi tiết về cấu trúc, chức năng và các bệnh liên quan đến từng hệ cơ quan, từ đó hiểu rõ hơn về cơ thể và cách cơ thể vận hành. Lưu ý: Để tham gia, học sinh cần hoàn thành một năm học môn Sinh học ở cấp trung học phổ thông để nắm vững các khái niệm sinh học được giảng dạy." },
    { title: "Astronomy", description: "Astronomy giới thiệu lịch sử thiên văn và các khái niệm cơ bản về vũ trụ. Học sinh tìm hiểu Vụ Nổ Lớn (Big Bang), sự hình thành nguyên tử, nguyên tố, sao, thiên hà và hệ mặt trời. Khóa đào tạo này giúp học sinh đánh giá khả năng tồn tại sự sống ngoài Trái Đất và phân tích các sứ mệnh không gian quan trọng. Qua đó, học sinh khám phá tiềm năng phát triển của ngành vũ trụ học trong tương lai và mở rộng hiểu biết về vũ trụ bao la." },
    { title: "Financial Literacy",  description: "Financial Literacy giúp học sinh khám phá các khía cạnh của tài chính cá nhân. Khóa đào tạo tập trung vào các cách kiếm thu nhập, chi tiêu, tiết kiệm, đầu tư, quản lý tín dụng và quản lý rủi ro thông qua các ứng dụng thực tế. Những khái niệm này sẽ hỗ trợ học sinh chuẩn bị cho tương lai tài chính của mình." },
    { title: "Psychology", description: "Psychology giúp học sinh khám phá khoa học về hành vi con người và vai trò của tâm lý học trong đời sống hàng ngày. Học sinh tìm hiểu mối liên hệ giữa hành vi, cảm xúc và di truyền, đồng thời nghiên cứu các nhà tâm lý học nổi bật và những khám phá quan trọng của họ. Khóa đào tạo này bao gồm các chủ đề như giải phẫu não bộ, rối loạn tâm lý, thử nghiệm và nghiên cứu, giúp học sinh hiểu sâu hơn về con người và cách con người suy nghĩ, cảm nhận, hành động." },
    { title: "Art Appreciation",  description: "Art Appreciation giúp học sinh khám phá nghệ thuật thị giác từ cổ đại đến hiện đại, qua các chủ đề như Stonehenge, nghệ sĩ Phục Hưng, Pop Art và đài tưởng niệm công cộng. Khóa đào tạo nhấn mạnh mối liên hệ giữa nghệ thuật, văn hóa và lịch sử, đồng thời phát triển khả năng phân tích và diễn giải tác phẩm nghệ thuật. Học sinh còn được thực hành các kỹ thuật cơ bản, giúp lịch sử nghệ thuật trở nên sinh động và gần gũi hơn." },
    { title: "Fashion Design",  description: "Fashion Design là một khóa đào tạo nâng cao giúp học sinh khám phá toàn diện hệ thống thời trang, từ ý tưởng đến sản phẩm hoàn chỉnh. Học sinh tìm hiểu quy trình sản xuất, lịch sử thời trang, công cụ, vải vóc và ứng dụng công nghệ. Khóa đào tạo này cũng phân tích vai trò của nhà thiết kế, xu hướng và yếu tố kinh doanh. Học sinh thực hành thiết kế, tạo bảng cảm hứng, học thuật ngữ chuyên ngành và rèn kỹ năng dự đoán xu hướng thời trang tương lai." },
    { title: "Music Appreciation",  description: "Music Appreciation giúp học sinh phát triển sự hiểu biết và cảm nhận âm nhạc thông qua việc lắng nghe các thể loại đa dạng và sử dụng bản đồ nghe (biểu đồ cảm thụ âm nhạc). Học sinh khám phá ảnh hưởng của công nghệ, xã hội và cuộc sống đến âm nhạc, đồng thời phân tích các ý tưởng sáng tác và diễn giải cá nhân. Khóa đạo tạo này so sánh âm nhạc qua các thời kỳ và ảnh hưởng giữa các tác phẩm. Đây là nền tảng vững chắc cho học sinh yêu âm nhạc và muốn theo đuổi chuyên sâu sau trung học." },
    { title: "High School Health",  description: "High School Health giúp học sinh học cách đưa ra quyết định đúng đắn để cải thiện sức khỏe tổng thể. Khóa đào tạo này đề cập đến lối sống lành mạnh, dinh dưỡng, vận động, cũng như vai trò và trách nhiệm trong gia đình và cộng đồng. Học sinh được trang bị kiến thức thực tiễn để xây dựng cuộc sống an toàn, lành mạnh và năng động, đồng thời củng cố các khái niệm về chăm sóc sức khỏe phù hợp với cuộc sống hàng ngày." },
    { title: "High School Nutrition and Personal Fitness",description: "High School Nutrition and Personal Fitness giúp học sinh nhận thức được tầm quan trọng của lựa chọn dinh dưỡng và thể dục đối với cuộc sống của mình. Các em sẽ học các cách thực tế để kiểm soát sức khỏe thông qua chế độ ăn uống, tập luyện và quản lý căng thẳng. Học sinh cũng khám phá rằng việc duy trì thể chất sẽ giúp các em cảm thấy khỏe khoắn và thoải mái." },
    { title: "Marketing", description: "Marketing giúp học sinh hiểu cách tiếp thị ảnh hưởng đến cuộc sống và hành vi tiêu dùng. Khóa đào tạo giới thiệu quá trình nghiên cứu, phân tích thị trường, xác định nhu cầu khách hàng và cách đáp ứng hiệu quả những nhu cầu đó. Học sinh được trang bị kiến thức nền tảng về marketing, quảng cáo và kinh doanh, phù hợp với những ai quan tâm đến các ngành nghề trong lĩnh vực thương mại hiện đại và muốn phát triển sự nghiệp trong môi trường kinh doanh năng động." },
    { title: "Advertising",  description: "Advertising cung cấp cho học sinh cái nhìn toàn diện về ngành quảng cáo, từ mục tiêu đến lý thuyết cơ bản. Học sinh học cách xác định thị trường mục tiêu, phân tích nhu cầu của người tiêu dùng và doanh nghiệp, cũng như xây dựng kế hoạch quảng cáo hiệu quả. Khóa đào tạo này trang bị kỹ năng thực tiễn và hướng dẫn học sinh tạo một kế hoạch quảng cáo hoàn chỉnh, giúp các em hiểu rõ yêu cầu và cơ hội nghề nghiệp trong lĩnh vực quảng cáo hiện đại." },
    { title: "Business Management",  description: "Business Management giúp học sinh hiểu vai trò của mình trong kinh doanh với tư cách là người lao động, người tiêu dùng và công dân. Khóa đào tạo đi sâu vào các chủ đề như quản lý doanh nghiệp, sử dụng tín dụng và vai trò của chính phủ trong nền kinh tế Mỹ. Đây là bước tiếp nối lý tưởng sau môn Nhập môn Kinh doanh, cung cấp kiến thức chi tiết và thực tiễn để học sinh hiểu rõ hơn về cách điều hành và phát triển một doanh nghiệp thành công." },
    { title: "Career Explorations",  description: "Career Explorations giúp học sinh khám phá con đường sự nghiệp phù hợp với sở thích và khả năng cá nhân. Học sinh tìm hiểu về các ngành nghề, yêu cầu công việc, bằng cấp, mức lương và triển vọng nghề nghiệp. Khóa đào tạo trang bị kỹ năng tìm việc như viết sơ yếu lý lịch, phỏng vấn và xây dựng hồ sơ cá nhân. Học sinh cũng học cách xử lý tình huống, phát triển kỹ năng nghề nghiệp và chuẩn bị cho các thách thức tài chính trong tương lai. Các chủ đề bao gồm: - Career Preparation - Career Research - Career Acquisition - Understanding the Workplace - Career Retention & Advancement - Financial Literacy - Job Shadowing" },
    { title: "Life Skills", description: "Life Skills giúp học sinh phát triển các kỹ năng cần thiết để sống độc lập và thành công trong tương lai. Khóa đào tạo này tập trung vào tài chính cá nhân, dinh dưỡng và phát triển bản thân, đồng thời rèn luyện kỹ năng thực tiễn như lập kế hoạch tài chính, duy trì lối sống lành mạnh và xây dựng kỹ năng mềm. Học sinh được trang bị nền tảng vững chắc để trở thành những người trưởng thành có trách nhiệm, chủ động và quản lý cuộc sống một cách hiệu quả." }
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
        <div class="card-detail" style="display: none; margin-top: 10px; color: #555;">
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
  