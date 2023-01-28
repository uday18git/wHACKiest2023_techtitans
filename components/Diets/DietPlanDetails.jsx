import React from 'react'
import { TiTick } from 'react-icons/ti'
import TransparentBtn from '../Cards/TransparentBtn'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const DietPlanDetails = () => {
  return (
    <div className="flex flex-col  shadow-lg space-x-3 mx-auto gap-5">
      <img
        src="/images/diet1.jpg"
        alt=""
        className=" rounded-md max-h-[800px] max-w-[900px] mx-auto"
      />
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col space-y-4 ">
          <p className="text-gray-300 text-xl ">
          The Mediterranean diet is a dietary pattern inspired by the traditional eating habits of people living in Mediterranean countries such as Greece, Italy, and Spain.
          It emphasizes the consumption of whole, unprocessed foods such as fruits, vegetables, whole grains, legumes, and nuts, while limiting the intake of red meat, processed foods, and added sugars. The diet also includes moderate amounts of fish, poultry, and dairy products, 
          and encourages the use of olive oil as the primary source of fat.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="/images/chef.jpg"
              className="rounded-full max-w-[150px] h-[150px] object-cover"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-white text-2xl">Rahim Khan</h2>
              <p className="text-md text-gray-300">Your Qualified Trainee</p>
            </div>
          </div>

          <h4 className="font-semibold text-white text-4xl">Benefits </h4>

          {[1, 2, 3, 4, 5].map((item, i) => (
            <div className="flex space-x-2 items-center">
              <TiTick className="text-green-800" />
              <h3 className="font-semibold text-gray-400 text-lg">
              1.Reduced risk of heart disease: The Mediterranean diet is rich in heart-healthy fats, such as olive oil, and low in saturated fat,
              which can help lower cholesterol levels and reduce the risk of heart disease
              </h3>
            </div>
          ))}

          <div className="flex items-center">
            <button className="bg-white text-gray-900 font-semibold px-5 py-3">
              $99
            </button>
            <TransparentBtn
              text={'Enroll Now'}
              classes={'max-w-[200px] text-white border-white'}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-gray-100 text-4xl">Explore Menu</h2>
          <div>
            {[1,2,3,4,5,6].map((item,i)=>(

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            ))}
            
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default DietPlanDetails
