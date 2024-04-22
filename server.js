const express = require('express');
const app = express();
const COMPANY = {
    name: `Stanley and Jimmy's Game and Sip`,
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
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
        projectname: "Divide and Conquer",
        location: "New York City",
        duration: '3 years',
        description: "Successfully opened up an X number of franchise locations across the New York City area.",
    },
    {
        id:2,
        projectname: "Mix and Sip",
        location: "Dallas",
        duration: '8 months',
        description: "Partnering with vendors to bring a stable blend of popular refreshments.",
    },
    {
        id:3,
        projectname: "User Outreach",
        location: "California",
        duration: '6 months',
        description: "Engaging with the user base to establish connections and foot traffic.",
    },
],
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

  app.get('/staff', (req, res) => {
    res.render('staff.ejs', {
      staff: COMPANY.staff,
    });
  });

  app.get('/company-history', (req, res) => {
    res.render('company-history.ejs', {
      COMPANY,
    });
  });

  app.get('/contact-us', (req, res) => {
    res.render('contact-us.ejs', {
      COMPANY
    });
  });

app.listen(3000, () => {
    console.log("Listening on port 3000");
  });