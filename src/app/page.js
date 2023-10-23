'use client';
import React from "react"
import { 
  Card, 
  CardHeader, 
  CardFooter,
  CardBody,
  Image,
  Button,
  Divider,
  Spacer,
  ScrollShadow,
  Input,
  Textarea,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter

 } from "@nextui-org/react";
import emailjs from '@emailjs/browser'
import { motion, Variants } from "framer-motion";
import WebsiteNavbar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faPython } from "@fortawesome/free-brands-svg-icons"



const projectsList = [
  {
    name: "LeadStack",
    url: "https://lead-stack.herokuapp.com/",
    imgUrl: "./images/projects/leadstack.JPG",
    description: "CRM for mortgage brokers to keep track of progress and communication with their leads.",
    techStack: ["React.js", "Node.js", "Vite.js", "GraphQL", "MongoDB", "Express.js", "Javascript" ],
  },
  {
    name: "Centiment",
    url: "https://centiment-inc.herokuapp.com/login",
    imgUrl: "./images/projects/centiment.JPG",
    description: "Social media site used to quantify the overall sentiments of the world. Buy shares of topics to participate, sell them to make money!",
    techStack: ["Node.js", "MySQL", "Node.js", "Express.js", "Handlebars", "Javascript"],
  },
  {
    name: "Taylor's Kitchen",
    url: "https://isayahdurst.github.io/taylors-kitchen-meal-prep-app/",
    imgUrl: "./images/projects/taylors-kitchen.jpg",
    description: "Meal prep app to generate weekly meal plans based on your dietary preferences. ",
    techStack: ["Javascript", "HTML", "CSS"],
  },
]

const skillList = [
  {
    icon: "./images/skillIcons/typescript-plain.svg",
    name: "Typescript/TS"
  },
  {
    icon: "./images/skillIcons/javascript-plain.svg",
    name: "Javascript/JS"
  },
  {
    icon: "./images/skillIcons/python-plain.svg",
    name: "Python"
  },
  {
    icon: "./images/skillIcons/nextjs-original.svg",
    name: "Next.js/NextJS"
  },
  {
    icon: "./images/skillIcons/react-original.svg",
    name: "React/React"
  },
  {
    icon: "./images/skillIcons/vuejs-plain.svg",
    name: "Vue.js/VueJS"
  },
  {
    icon: "./images/skillIcons/nodejs-plain.svg",
    name: "Node.js/NodeJS"
  },
  {
    icon: "./images/skillIcons/express-original.svg",
    name: "Express/Express.js"
  },
  {
    icon: "./images/skillIcons/mysql-plain.svg",
    name: "MySQL"
  },
  {
    icon: "./images/skillIcons/mongodb-plain.svg",
    name: "MongoDB"
  },
  {
    icon: "./images/skillIcons/graphql-plain.svg",
    name: "GraphQL"
  },
  {
    icon: "./images/skillIcons/redux-original.svg",
    name: "Redux"
  },
  {
    icon: "./images/skillIcons/html5-plain.svg",
    name: "HTML"
  },
  {
    icon: "./images/skillIcons/css3-plain.svg",
    name: "CSS"
  },

]


export default function Home() {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('') 
  const [message, setMessage] = React.useState('')

  const [formData, setFormData] = React.useState({})
  const [submitDisabled, setSubmitDisabled] = React.useState(true)
  const {isOpen, onOpen, onClose} = useDisclosure();

  React.useEffect(() => {
    setFormData({
      name,
      email,
      message 
    })
  }, [name, email, message])

  React.useEffect(() => {
    if (name && email && message) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }, [formData])

  const handleSubmit = async (event) => {
    event.preventDefault()

    await emailjs.send(
      "service_2f2f2mq", 
      "template_c9daajn", 
      {
        from_name: name,
        message: message,
        reply_to: email
      },
      "aJlnkJ0LFchN9tcPV"
    )
  

    // Clear form
    setName('')
    setEmail('')
    setMessage('')

    onOpen()
  }


  return (
    <main className="flex min-h-screen w-screen flex-col items-center"
    id="home">
      <WebsiteNavbar />
      
      {
        //About Me ----------------------------------------------------------------------------------------------------------------------------------
      }
      <div 
      className="p-8 sm:p-20 flex flex-wrap w-full justify-center items-center bg-white"
      id="about-me">
        <motion.div
          className="justify-center flex flex-wrap items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <div
          className="h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] makeImageCircular"
          >
              <img
              src="./images/profile.JPG"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
        
        <Spacer x={8}/>

        
        <div
        className="w-full sm:w-1/2 min-h-[400px] max-h-[600px] "
        >
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div 
            variants={
              {
                offscreen: {
                  x: -400,
                  rotate:-10,
                  opacity:0
                },
                onscreen: {
                  y: 0,
                  x: 0, 
                  rotate: 0,
                  opacity:100,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.7,
                    delay:0.4
                  }
                }
              }
            }>
                  
              <div 
              className="p-4 flex-col items-start max-w-full"
              >
                <p className="text-tiny uppercase font-bold text-black">Anthony Li</p>
                <Spacer y={4}/>
                <h4 className="font-bold text-2xl text-black">ABOUT ME</h4>
                <Divider/>
              </div>
              <div 
              className="p-4 max-w-full text-black"
              >
                <div>
                  I am currently a proud Full Stack Developer for the Amortize.ai team, driven by curiosity and a desire for continual improvement. My career journey has taken me from finance to tech, equipping me with a unique interdisciplinary perspective that has contributed to first place at MIT Grand Hack 2023, as well as second place at my current company's annual Hackathon.
                </div>
                <Spacer y={4}/>
                <div>
                  I thrive on distilling data into actionable intelligence. My goal is to build applications that put comprehensive yet concise information into the hands of users so they can make optimal decisions. 
                </div>

                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {
        //Skills ----------------------------------------------------------------------------------------------------------------------------------
      }
      

      <div 
      className="p-4 flex flex-wrap flex-col w-full justify-center items-center bg-white"
      id="skills">
        <Spacer y={10} />
        <h2 className="text-black font-bold text-2xl p-4">SKILLS</h2>
        <Divider className="w-5/6"/>
        <Spacer y={10} />

        
        <motion.ol
        className="m-6 flex flex-wrap w-5/6 justify-center gap-2"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={
          {
            onscreen: {
              transition: {
                delayChildren: 0.85,
                staggerChildren:0.05,
              }
            },
            
          }
          
        }
        >
          {
            skillList.map((skill, index) => {
              return (
                <motion.li
                key={index}
                variants={
                  {
                    offscreen: {
                      y: 400,
                      rotate:20,
                      opacity:0
                    },
                    onscreen: {
                      y: 0,
                      x: 0, 
                      rotate: 0,
                      opacity:100,
                      transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.7,
                      }
                    }
                  }
                }>
                  <Card  
                  key={index}
                  shadow="sm" 
                  >
                    <CardBody className="overflow-visible p-4">
                      <Image
                        radius="lg"
                        width="100%"
                        alt={skill.name}
                        className="w-full object-cover h-[140px]"
                        src={skill.icon}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-center">
                      <b>{skill.name}</b>
                    </CardFooter>
                  </Card>
                </motion.li>
              )
            })
          }
      </motion.ol>

      <Spacer y={20} />
      </div>

      
    
      {
        //Projects List ----------------------------------------------------------------------------------------------------------------------------------
      }

      

      <div
      className="p-4 flex flex-col flex-wrap w-full sm:w-5/6 justify-center items-center bg-slate-100"
      >
        <Spacer id="projects"/>
        <Spacer y={10} />
        <h2 className="text-black font-bold text-2xl p-4">PROJECTS</h2>
        <Divider/>

        <motion.ol
        className="m-6 flex flex-wrap w-5/6 justify-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={
          {
            onscreen: {
              transition: {
                staggerChildren:0.1,
              }
            },
            
          }
          
        }
        >
          { 
            projectsList.map((project, index) => {
              return (
                
                  <motion.li
                  className="flex flex-row justify-center items-center"
                  key={index}
                  variants={
                    {
                      offscreen: {
                        y: 400,
                        rotate:-20,
                        opacity:0
                      },
                      onscreen: {
                        y: 0,
                        x: 0, 
                        rotate: 0,
                        opacity:100,
                        transition: {
                          type: "spring",
                          bounce: 0.4,
                          duration: 0.7,
                        }
                      }
                    }
                  }>
                    <Card 
                    className="w-5/6 h-[525px] m-2 px-4 py-4 sm:w-[400px] sm:h-[525px]"
                    data-key={index}
                    >
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h1 className="font-bold text-large">{project.name}</h1>
                      </CardHeader>

                      <Spacer y={4} />
                      
                      <CardBody className="overflow-visible py-2">
                        <a 
                        href={project.url}
                        className="w-full h-64"
                        target="_blank"
                        rel="noreferrer noopener"
                        >
                          <Image
                            removeWrapper
                            isZoomed
                            alt={project.title}
                            className="z-0 w-full h-full object-cover"
                            src={project.imgUrl}
                          />
                        </a>
                      </CardBody>

                      <Divider className="my-4"  />

                      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                        <ScrollShadow 
                        className="w-[300px] h-[400px]"
                        offset="0"
                        size="20"
                        >
                          <Spacer y={2} />
                          <p className="text-tiny uppercase font-bold">{project.techStack.map((item, index) => ( (index ? ', ': '') + item ))}</p>
                          <Spacer y={4} />
                          <p className="text-tiny">{project.description}</p>
                          <Spacer y={2} />
                        </ScrollShadow>
                      </CardFooter>
                    </Card>
                  </motion.li>
                
              )
            })
            
          }
        </motion.ol>

      </div>
      
    

      {
        //Contact Me ------------------------------------------------------------------------------------------------------------
      }
      

      <div 
      className="p-4 flex flex-wrap flex-col w-full justify-center items-center bg-white"
      id="contact">
        <Spacer id="contact-me"/>
        <Spacer y={10} />
        <h2 className="text-black font-bold text-2xl p-4">CONTACT ME</h2>
        <Divider/>

        <Spacer y={6} />
        
        <form
        className="w-5/6 sm:w-1/4" 
        onSubmit={handleSubmit}>

          <Spacer y={2} />

          <Input
            clearable
            isRequired
            label="Your name"
            size="sm"
            value={name}
            onChange={(e) => setName(e.target.value)}  
          />

          <Spacer y={2} />

          <Input
            clearable
            isRequired
            type="email"
            label="Your email" 
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <Spacer y={4} />

          <Textarea
            clearable
            isRequired
            label="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            css={{ height: '150px' }}
          />

          <Spacer y={4} />

          <Button
            type="submit"
            isDisabled={submitDisabled}
          >
            Submit
          </Button>

        </form>

        
        


        <Spacer y={10} />

      </div>

      {
        //Footer ----------------------------------------------------------------------------------------------------------------------------------
      }
      
      <div
        className="p-4 flex flex-wrap w-full justify-center bg-blue-600"
      >
        <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/lunchtimewhee"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}} />
        </a> 

        <Spacer x={6}/>

        <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/anthony-li-cs/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffff",}} />
        </a>    
        

      </div>
        

      <Modal 
        size="xl" 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Thank you!</ModalHeader>
              <ModalBody>
                <p> 
                 Thanks for reaching out! I will get back to you as soon as I can. 
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        
    </main>
  )
}
