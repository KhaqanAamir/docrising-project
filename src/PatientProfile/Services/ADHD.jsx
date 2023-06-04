import React, { useState, useEffect } from 'react'
import NavBar2 from '../../Components/NavBar2'
import '../../Styles/Pages/Home/ADHD.css'
import ADHDs from '../../utils/Local Images/ADHD.jpg'

const ADHD = () => {
    const newsItems = [
        {
          title: 'Study Shows Benefits of Exercise for Children with ADHD',
          content: 'A recent study published in the Journal of Pediatrics highlights the positive impact of regular exercise on children with ADHD. The study found that physical activity can help reduce symptoms of ADHD and improve cognitive functioning.',
          link: 'https://www.example.com/news/article1',
        },
        {
          title: 'New Treatment Option Approved by FDA',
          content: 'The Food and Drug Administration (FDA) has recently approved a new medication for the treatment of ADHD in adults. The medication has shown promising results in clinical trials and offers an alternative for those who may not respond well to existing treatments.',
          link: 'https://www.example.com/news/article2',
        },
        {
            title: 'Study Shows Benefits of Exercise for Children with ADHD',
            content: 'A recent study published in the Journal of Pediatrics highlights the positive impact of regular exercise on children with ADHD. The study found that physical activity can help reduce symptoms of ADHD and improve cognitive functioning.',
            link: 'https://www.example.com/news/article1',
          },
          {
            title: 'New Treatment Option Approved by FDA',
            content: 'The Food and Drug Administration (FDA) has recently approved a new medication for the treatment of ADHD in adults. The medication has shown promising results in clinical trials and offers an alternative for those who may not respond well to existing treatments.',
            link: 'https://www.example.com/news/article2',
          },
          {
            title: 'Study Shows Benefits of Exercise for Children with ADHD',
            content: 'A recent study published in the Journal of Pediatrics highlights the positive impact of regular exercise on children with ADHD. The study found that physical activity can help reduce symptoms of ADHD and improve cognitive functioning.',
            link: 'https://www.example.com/news/article1',
          },
          {
            title: 'New Treatment Option Approved by FDA',
            content: 'The Food and Drug Administration (FDA) has recently approved a new medication for the treatment of ADHD in adults. The medication has shown promising results in clinical trials and offers an alternative for those who may not respond well to existing treatments.',
            link: 'https://www.example.com/news/article2',
          },
        // Add more news items here
      ];

      const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const currentSlide = newsItems[currentSlideIndex];


  return (
    <>
    <NavBar2/>
      <div className="adhd-page">
        <div className="sidebar">
          <h2>ADHD Information</h2>
          <ul>
            <li><a href="#symptoms">Symptoms</a></li>
            <li><a href="#treatment">Treatment Options</a></li>
            <li><a href="#resources">Support and Resources</a></li>
          </ul>
        </div>
        <div className="content">
          <h1>ADHD (Attention-Deficit/Hyperactivity Disorder)</h1>
          <p>
            ADHD is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that significantly interfere with daily functioning and development.
          </p>
          
          <h2 id="symptoms">Symptoms</h2>
          <ul>
            <li>Inattention: difficulty sustaining focus, easily distracted, forgetfulness, disorganization.</li>
            <li>Hyperactivity: excessive physical movements, restlessness, fidgeting, difficulty staying seated.</li>
            <li>Impulsivity: acting without thinking, interrupting others, difficulty waiting for their turn.</li>
          </ul>
          
          <h2 id="treatment">Treatment Options</h2>
          <p>
            Treatment for ADHD often involves a combination of medication, therapy, and behavioral interventions. Some common treatment options include:
          </p>
          <ul>
            <li><strong>Stimulant Medications:</strong> Medications like methylphenidate and amphetamine-based drugs can help improve attention and reduce hyperactivity.</li>
            <li><strong>Non-Stimulant Medications:</strong> Certain non-stimulant medications, such as atomoxetine, can be prescribed as an alternative or in combination with stimulant medications.</li>
            <li><strong>Behavioral Therapy:</strong> Behavioral therapies, such as cognitive-behavioral therapy (CBT), can help individuals develop coping strategies, improve organizational skills, and manage impulsive behaviors.</li>
            <li><strong>Parent Training and Education:</strong> Parents can benefit from training programs that provide strategies for managing their child's behavior and creating supportive environments.</li>
            <li><strong>Support at School:</strong> Collaborating with teachers and implementing accommodations, such as extra time for assignments or seating closer to the front, can support academic success.</li>
          </ul>
          
          <h2 id="resources">Support and Resources</h2>
          <p>
            It is important to seek professional evaluation and guidance for ADHD diagnosis and treatment. Here are some resources that can provide further information and support:
          </p>
          <ul className='resources'>
            <li><a href="https://www.cdc.gov/ncbddd/adhd/index.html">Centers for Disease Control and Prevention (CDC) - ADHD</a></li>
            <li><a href="https://chadd.org/">Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD)</a></li>
            <li><a href="https://www.understood.org/">Understood</a></li>
          </ul>
          <div className="adhd-page">
      <div className="content">
        {/* ...existing content section... */}
        <div id="resources">
          {/* ...existing resources section... */}
        </div>
        <div className="news-feed">
          <h2>ADHD News Feed</h2>
          <div className="slideshow">
            <h3>{currentSlide.title}</h3>
            <p>{currentSlide.content}</p>
            <a href={currentSlide.link}>Read more</a>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className="image-sidebar">
          <img src={ADHDs} alt="ADHD" />
          <div className="quote">
            <p>"ADHD is not a deficit of attention, but rather a condition where attention is not properly regulated."</p>
            <p className="author">- Dr. Russell A. Barkley</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ADHD