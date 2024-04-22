const express = require('express');
const app = express();
const COMPANY = {
    name: `Stanley and Jimmy's Game and Sip`,
  isOpen: true,
  address: '123 Random Street, New York, NY 11205',
  phone: '555-321-9876',
staff: [
    {
        id:1,
        name: "Stanley",
        title: "Technical Product Manager",
        yearsOfExperience: 5,
        contact: "email",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:2,
        name: 'Jimmy',
        title: 'CFO',
        yearsOfExperience: 5,
        contact: "email",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:3,
        name: 'Stacy',
        title: 'Fullstack Engineer',
        yearsOfExperience: 8,
        contact: "email",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:4,
        name: 'Bobby',
        title: 'Front End Engineer',
        yearsOfExperience: 2,
        contact: "email",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id:5,
        name: 'Mike',
        title: 'Marketing',
        yearsOfExperience: 3,
        contact: "email",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
],
pastWork: [
    {
        id:1,
        project: "Divide and Conquer",
        location: "New York City",
        duration: '3 years',
        description: "Successfully opened up a number of franchise locations across the New York City area.",
    },
    {
        id:2,
        project: "Mix and Sip",
        location: "Dallas",
        duration: '8 months',
        description: "Partnering with vendors to bring a stable blend of popular refreshments.",
    },
    {
        id:3,
        project: "User Outreach",
        location: "California",
        duration: '6 months',
        description: "Engaging with the user base to establish connections and foot traffic.",
    },
],
history: `Newly founded in 2024 by Stanley Jean and Jimmy Helm. The two founders got together for drinks one day and just decided how amazing it would be to bring gamers together in a peaceful environment where they could not only "touch grass" but feel some relief from their daily raging and fustrations. The inspiration come from the tradition internet cafe but with a little twist. With that said, Welcome to the era of Game and Sip!`
};







app.get('/', (req, res) => {
  res.render('home.ejs', {
    COMPANY,
  });
});

app.get('/past-work', (req, res) => {
    res.render('past-work.ejs', {
      pastWork: COMPANY.pastWork,
    });
  });

  app.get("/past-work/:project", (req, res) => {
    const projectName = req.params.project;
    //const projectItems = COMPANY.pastWork.filter(item => item.project === projectName)
    const capitalizedProjectName = projectName.charAt(0).toUpperCase() + projectName.slice(1);
    res.render("project.ejs", {
     projectName: capitalizedProjectName, pastWork: COMPANY.pastWork,
    });
});

  app.get('/staff/:staff', (req, res) => {
    const staff = req.params.staff;
    const capitalizedStaffName = staff.charAt(0).toUpperCase() + staff.slice(1);
    res.render('staff.ejs', {
        staff: capitalizedStaffName
    });
  });

  app.get('/company-history', (req, res) => {
    res.render('company-history.ejs', {
      history: COMPANY.history,
    });
  });

  app.get('/contact-us', (req, res) => {
    res.render('contact-us.ejs', {
      COMPANY
    });
  });

  app.get('/links', (req, res) => {
    res.render('links.ejs', {
      COMPANY
    });
  });

app.listen(3000, () => {
    console.log("Listening on port 3000");
  });










//   <a href="/past-work/divideandconquer"> <h3><p>Divide and Conquer</p></h3></a>
//   <a href="/past-work/mixandsip">  <h3><p>Mix and Sip</p></h3></a>
//     <a href="/past-work/useroutreach"> <h3><p>User Outreach</p></h3></a>