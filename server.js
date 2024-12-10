const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy API Endpoint
app.get('/api/data', (req, res) => {
  res.json([
        {id: 1, title: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X NAndita', text: 'Coke Studio Bangla', img_url: thumbnail8, img_url1: Ellipse41, img_url2: verified, text2: '1.5M views | 2 days ago'},

        {id: 2, title: 'Infix Note 12: Amoled | Hello G88 SoC1', text: 'ATC Android ToTo Company', img_url: thumbnail9, img_url1: Ellipse42, img_url2: verified, text2: '42M views | 2 days ago'},

        {id: 3, title: 'My first UX Design case study- This got me my first job.', text: 'Saptarshi Prakash', img_url: thumbnail10, img_url1: Ellipse43, img_url2: verified, text2: '48K views | 1 years ago'},

        {id: 4, title: 'My Mix', text: 'Lopamudra Mitra, Anupam Roy, and more', img_url: thumbnail11},

        {id: 5, title: 'UX Design - What is it? (From AJ&Smart)', text: 'AJ&Smart', img_url: thumbnail4, img_url1: Ellipse44, img_url2: verified, text2: '150KM views | 3 years ago'},

        {id: 6, title: 'Mix-Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ashan ft Anika', text: 'Mohon Sharif, Odd Signature, Shayan Chowdhruy Amob, and more', img_url: thumbnail5},

        {id: 7, title: 'lorem lorem lorem lorem lorem | 48 VISA-FREE', text: 'Nadir On The Go', img_url: thumbnail6, img_url1: Ellipse45, img_url2: verified, text2: '1.7M views | 1 years ago'},

        {id: 8, title: '14 Advanced Tips to Design FASTER in Figma', text: 'Mizko', img_url: thumbnail7, img_url1: Ellipse46, img_url2: verified, text2: '53K views | 1 years ago'},

        {id: 9, img_url: thumbnail},

        {id: 9, img_url: thumbnail1},

        {id: 9, img_url: thumbnail2},

        {id: 9, img_url: thumbnail3},
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
