$(function() {
  // String for Increase speed.
  const workData = `
  [
    {
      "name": "Electronic Medical Record",
      "detail": "",
      "cover": "images/portfolio/ocare/EHR/EHR_001.png",
      "images": [
        "images/portfolio/ocare/EHR/EHR_002.png",
        "images/portfolio/ocare/EHR/EHR_003.png",
        "images/portfolio/ocare/EHR/EHR_004.png",
        "images/portfolio/ocare/EHR/EHR_010.png"
      ]
    },
    {
      "name": "Health Business Intelligence",
      "detail": "",
      "cover": "images/portfolio/ocare/HealthBi/HealthBI_003.png",
      "images": [
        "images/portfolio/ocare/HealthBi/HealthBI_003.png",
        "images/portfolio/ocare/HealthBi/HealthBI_004.png",
        "images/portfolio/ocare/HealthBi/HealthBI_005.png",
        "images/portfolio/ocare/HealthBi/HealthBI_006.png",
        "images/portfolio/ocare/HealthBi/HealthBI_007.png"
      ]
    },
    {
      "name": "Personal Health Record",
      "detail": "",
      "cover": "images/portfolio/ocare/PHR/PHR_002.png",
      "images": [
        "images/portfolio/ocare/PHR/PHR_002.png",
        "images/portfolio/ocare/PHR/PHR_003.png",
        "images/portfolio/ocare/PHR/PHR_005.png",
        "images/portfolio/ocare/PHR/PHR_007.png",
        "images/portfolio/ocare/PHR/PHR_008.png"
      ]
    },
    {
      "name": "Prudential Health Checkup Booking",
      "detail": "",
      "cover": "images/portfolio/ocare/Prudential/Prudential_001.png",
      "images": [
        "images/portfolio/ocare/Prudential/Prudential_002.png",
        "images/portfolio/ocare/Prudential/Prudential_003.png",
        "images/portfolio/ocare/Prudential/Prudential_005.png"
      ]
    },
    {
      "name": "Ocare Health Dashboard",
      "detail": "",
      "cover": "images/portfolio/ocare/OcareDashbord/OcareDashboard_002.png",
      "images": [
        "images/portfolio/ocare/OcareDashbord/OcareDashboard_002.png",
        "images/portfolio/ocare/OcareDashbord/OcareDashboard_003.png",
        "images/portfolio/ocare/OcareDashbord/OcareDashboard_004.png"
      ]
    },
    {
      "name": "Antique shop website of Sianoikhakhongkao",
      "detail": "",
      "cover": "images/portfolio/6/1.png",
      "images": [
        "images/portfolio/6/2.png",
        "images/portfolio/6/3.png",
        "images/portfolio/6/4.png",
        "images/portfolio/6/5.png",
        "images/portfolio/6/6.png",
        "images/portfolio/6/7.png",
        "images/portfolio/6/8.png"
      ]
    },
    {
      "name": "E-booking of Soparesort",
      "detail": "",
      "cover": "images/portfolio/1/1.jpg",
      "images": [
        "images/portfolio/1/1.jpg",
        "images/portfolio/1/3.png",
        "images/portfolio/1/4.png",
        "images/portfolio/1/5.png",
        "images/portfolio/1/6.png",
        "images/portfolio/1/7.png",
        "images/portfolio/1/10.png"
      ]
    },
    {
      "name": "E-commerce of Kitcharoenphon",
      "detail": "",
      "cover": "images/portfolio/2/1.png",
      "images": [
        "images/portfolio/2/1.png",
        "images/portfolio/2/2.png",
        "images/portfolio/2/3.png",
        "images/portfolio/2/4.png",
        "images/portfolio/2/5.png"
      ]
    },
    {
      "name": "Dormitory management system of Thitikorn",
      "detail": "",
      "cover": "images/portfolio/5/1.png",
      "images": [
        "images/portfolio/5/1.png",
        "images/portfolio/5/2.png",
        "images/portfolio/5/3.png",
        "images/portfolio/5/4.png",
        "images/portfolio/5/5.png",
        "images/portfolio/5/6.png"
      ]
    },
    {
      "name": "Inventory Management System",
      "detail": "",
      "cover": "images/portfolio/3/2.png",
      "images": [
        "images/portfolio/3/2.png",
        "images/portfolio/3/2.png"
      ]
    },
    {
      "name": "School Management System",
      "detail": "",
      "cover": "images/portfolio/4/1.jpg",
      "images": [
        "images/portfolio/4/1.jpg",
        "images/portfolio/4/2.jpg",
        "images/portfolio/4/3.jpg",
        "images/portfolio/4/4.jpg",
        "images/portfolio/4/5.jpg",
        "images/portfolio/4/6.jpg",
        "images/portfolio/4/7.jpg",
        "images/portfolio/4/8.jpg"
      ]
    }
  ]  
  `;
  const projectData = `
  [
    { "name": "YTDPX", "detail": "Youtube downloader", "url": "", "cover":"" },
    { "name": "Data Arrange","detail": "Management data excel file to CSV","url": "", "cover":"" },
    { "name": "c", "detail": "detail_c", "url": "", "cover":"" }
  ]
  `;

  works(JSON.parse(workData));
  projects(JSON.parse(projectData));
});

function works(list_works) {
  function work_template(name, detail, image = "images/portfolio-1.jpg") {
    return `
    <div class="col-md-3 text-center col-padding">
      <a href="#" class="work" style="background-image: url(${image});" data-name="${name}">
        <div class="desc">
          <h3>${name}</h3>
          <span>${detail}</span>
        </div>
      </a>
    </div>
  `;
  }

  list_works.map(function(item, i) {
    $("#list-works").append(work_template(item.name, item.detail, item.cover));
  });

  const work = $(".work");
  const modalPortfolio = $("#PortfolioModal");
  work.click(function(e) {
    e.preventDefault();
    const name = $(this).data("name");
    let images = list_works.filter(x => x.name == name)[0].images;
    images = shuffle(images);
    modalPortfolio.modal("show");

    let imgEl = "";
    images.forEach(function(img) {
      imgEl +=
        '<a href="' +
        img +
        '" target="_blank"><img src="' +
        img +
        '" class="modalImg"/></a><div class="divider-line"></div>';
    });

    modalPortfolio.on("shown.bs.modal", function() {
      modalPortfolio.find("#PortfolioModalLabel").text(name);
      modalPortfolio.find(".modal-body .image_preview").html(imgEl);
    });

    modalPortfolio.on("hidden.bs.modal", function() {
      modalPortfolio.find("#PortfolioModalLabel").text("");
      modalPortfolio.find(".modal-body .image_preview").html("");
    });
    return false;
  });
}

function projects(my_project) {
  function project_template(
    name,
    detail,
    url = "javascrip:void(0)",
    image = "images/portfolio-1.jpg"
  ) {
    return `
    <div class="col-md-4">
      <div class="fh5co-blog">
        <a href="#" class="blog-bg" style="background-image: url(${image});"></a>
        <div class="blog-text">
          <h3><a href="#">${name}</a></h3>
          <p>${detail}</p>
          <ul class="stuff">
            <li><a href="${url}">Read More<i class="icon-arrow-right22"></i></a></li>
          </ul>
        </div> 
      </div>
    </div>
  `;
  }

  my_project.map(function(item, i) {
    $("#list-projects").append(
      project_template(item.name, item.detail, item.url)
    );
  });
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
