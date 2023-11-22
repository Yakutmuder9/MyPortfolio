import { qand, question } from "../assets";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";


const FAQs = () => {
  return (
    <div className="faqs" id="faqs">
    <div className="container">
        <div className="dollar-img">
          <img src={qand} alt="" />
          <img src={question} alt="" />
        </div>

        <div className="faqs-header">
          <h2>Frequently asked <span>QUESTIONS</span></h2>
          <p>
            Here are some of the questions that I have got asked frequently. So
            I have added them here for you. If you have any more
            questions/doubts you can always contact me below.
          </p>
        </div>

        <div className="faqs-accordian-container">
          <AccordionItem />
        </div>
      </div>
    </div>
  );
};


const accordionItems = [
  {
    id: 1,
    title: "What motivates me to design such amazing websites?",
    content:
      "Accordion Content 1  Here are some of the questions that I have got asked frequently. So I have added them here for you. If you have any more questions/doubts you can always contact me below. ",
  },
  {
    id: 2,
    title: "How do you stay updated with the latest design trends and technologies?",
    content:
      "Staying current with industry trends is essential for delivering modern and innovative websites. I regularly follow design blogs, attend webinars, and participate in design communities. Additionally, I actively seek out opportunities for professional development and skill enhancement.",
  },
  {
    id: 3,
    title: "Could you explain your approach to responsive web design?",
    content:
      "Responsive web design is a critical aspect of my work. I believe in creating websites that adapt seamlessly to different devices and screen sizes. By utilizing flexible grids, images, and media queries, I ensure that the user experience remains optimal, regardless of the device being used.",
  },
  {
    id: 4,
    title: "What role do user experience (UX) principles play in your design process?",
    content:
      "User experience is at the core of my design philosophy. I conduct user research, create user personas, and focus on intuitive navigation and accessibility. By prioritizing UX principles, I aim to make the websites I design user-friendly and enjoyable for all visitors.",
  },
  {
    id: 5,
    title: "How do you handle client feedback and revisions during a project?",
    content:
      "Client satisfaction is paramount to me. I welcome open communication and feedback throughout the project. I carefully review client suggestions and incorporate revisions to ensure the final product aligns perfectly with their vision and objectives.",
  },
];

const AccordionItem = () => {
  const [openItems, setOpenItems] = useState([]);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY ? 'down' : 'up');
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const handleItemClick = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  const toggleAccordion = (itemId) => {
    handleItemClick(itemId);
  };

  return (
    <div className="accordion-container"  ref={ref} >
      {accordionItems.map((item) => {
        const isOpen = openItems.includes(item.id);


        const slideDirection =
          scrollDirection === 'down'
            ? item.id % 2 === 1 ? '100vw' : '-50vw'
            : item.id % 2 === 0 ? '100vw' : '-50vw';

        return (
          <motion.div
            className="accordion"
            key={item.id}
            initial={{ opacity: 0, x: slideDirection }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : slideDirection }}
            transition={{ type: 'spring', duration: 2 }}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              <h6>{item.title}</h6>
              <span className="accordion-icon">
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>
            <motion.div
              className="accordion-content"
              initial={isOpen ? 'open' : 'closed'}
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, height: 'auto' },
                closed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <p>{item.content}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQs;
