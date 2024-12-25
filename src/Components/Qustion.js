import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Quest from './Quest'

function Qustion() {
  const [timetminute,setimetminute]=useState()
  const [timesecond,settimesecond]=useState()
  const [timetextcolor,settimetimetextcolor]=useState("green-500")


  var min=29;
  var sec=60;
  useEffect(()=>{
    const interval=setInterval(() => {
    
      if(sec<1){
        min--
        sec=60
      }
        sec--
      
      if(min<1){
        min=30;
      }
      // changing text color 
      if(min<=10){
        settimetimetextcolor("red-700")
      }
      setimetminute(min)
      settimesecond(sec);
    }, 1000);

    return ()=>clearInterval(interval);
  },[])

  // console.log(timetminute,timesecond)
    // const Qustionarray=[
    //     "Gopeshwar","Shanu","Yogi","Yash"
    // ];
  return (
    <>
    {/* <h1 className='text-center'>Question For CIT 8.0</h1> */}
    <Navbar/>
    {/* timer */}
    <div className='w-screen flex items-center justify-center bg-black p-5'>
        <h1 className={`text-nowrap text-${timetextcolor} animate-pulse`}>
        Time Left :- {timetminute}:{timesecond}
        </h1>
        </div>

        {/* All five dataInterpetatation question */}
        
        <>
{/* DataInterpatation Question 1 */}


{/* DataInterpatation Question 2 */}
 
{/* DataInterpatation Question 3 */}


{/* DataInterpatation Question 4 */}
{/* <>

<Quest qustionNumber="4."
SubqustionNumber="4(a)"
questionIntro="A cosmetic company provides five different products. The sales of these five products (in lakh number of packs) during 1995 and 2000 are shown in the following bar graph.
Sales (in lakh number of packs) of five different products of Cosmetic Company during 1995 and 2000"
question="The sales of lipsticks in 2000 was by what percent more than the sales of nail enamels in 2000? (rounded off to nearest integer)"
 questionimage="/assets/DataInterpatation/datainter4.png"
 option1="33%"
 option2="31%"
 option3="28%"
 option4="22%"/>

<Quest qustionNumber=""
SubqustionNumber="4(b)."
 questionIntro=""
 question="During the period 1995-2000, the minimum rate of increase in sales is in the case of?"
 option1="Shampoos"
 option2="Nail enamels"
 option3="Talcum powders"
 option4="Lipsticks"/>

<Quest qustionNumber=""
SubqustionNumber="4(c)."
 questionIntro=""
 question="What is the approximate ratio of the sales of nail enamels in 2000 to the sales of Talcum powders in 1995?"
 questionimage=""
 option1="7:2"
 option2="5:2"
 option3="4:3"
 option4="2:1"/>

<Quest qustionNumber=""
SubqustionNumber="4(d)."
 questionIntro=""
 question="The sales have increase by nearly 55% from 1995 to 2000 in the case of?"
 questionimage=""
 option1="Lipsticks"
 option2="Nail enamels"
 option3="Talcum powders"
 option4="Shampoos"/>

<Quest qustionNumber=""
SubqustionNumber="4(e)."
 questionIntro=""
 question="The sales of conditioners in 1995 was by what percent less than the sales of shampoos in 1995? (rounded off to nearest integer)"
 questionimage=""
 option1="57%"
 option2="36%"
 option3="29%"
 option4="25%"/>
</> */}
</>

        {/* All five Verbal question */}
        {/* <>

<Quest qustionNumber="1."
SubqustionNumber=""
questionIntro=""
question=""
questionimage="/assets/NonVerbal/Non-verbal1.png"
option1="1"
option2="2"
option3="3"
option4="4"/>

<Quest qustionNumber="2."
SubqustionNumber=""
questionIntro=""
question=""
questionimage="/assets/NonVerbal/Non-verbal2.png"
option1="1"
option2="2"
option3="3"
option4="4"/>

<Quest qustionNumber="3."
SubqustionNumber=""
questionIntro=""
question=""
questionimage="/assets/NonVerbal/Non-verbal3.png"
 option1="1"
 option2="2"
 option3="3"
 option4="4"/>
 
<Quest qustionNumber="4."
SubqustionNumber=""
 questionIntro=""
 question=""
 questionimage="/assets/NonVerbal/Non-verbal4.png"
 option1="20"
 option2="22"
 option3="24"
 option4="27"/>

<Quest qustionNumber="5."
SubqustionNumber=""
questionIntro=""
question=""
questionimage="/assets/NonVerbal/Non-verbal5.png"
 option1="1"
 option2="2"
 option3="3"
 option4="4"/>

        </>  */}


        {/* All five Non-Verbal question */}







        {/* back and next button */}
    <div className='w-screen flex items-center justify-center gap-10 p-5'>
      <button className='bg-yellow-300 px-[10px] py-[5px] text-black font-bold rounded-md hover:rounded-2xl transition-all  select-none'>Submit</button>
    </div>



    </>
  )
}

export default Qustion

// {/* All five dataInterpetatation question */}

// {/* <>
// {/* DataInterpatation Question 1 */}
// <>
// <Quest qustionNumber="1."
// SubqustionNumber="1(a)"
// questionIntro="The following pie-chart shows the percentage distribution of the expenditure incurred in publishing a book. Study the pie-chart and the answer the questions based on it.
// Various Expenditures (in percentage) Incurred in Publishing a Book"
//  question="If for a certain quantity of books, the publisher has to pay Rs. 30,600 as printing cost, then what will be amount of royalty to be paid for these books?"
//  questionimage="/assets/DataInterpatation/datainter1.png"
//  option1="Rs. 19,450"
//  option2="Rs. 21,200"
//  option3="Rs. 22,950"
//  option4="Rs. 26,150"/>

// <Quest qustionNumber=""
// SubqustionNumber="1(b)."
//  questionIntro=""
//  question="What is the central angle of the sector corresponding to the expenditure incurred on Royalty?"
//  option1="15°"
//  option2="24°"
//  option3="54°"
//  option4="48°"/>

// <Quest qustionNumber=""
// SubqustionNumber="1(c)."
//  questionIntro=""
//  question="The price of the book is marked 20% above the C.P. If the marked price of the book is Rs. 180,then what is the cost of the paper used in a single copy of the book?
// "
//  questionimage=""
//  option1="Rs. 187.50"
//  option2="Rs. 191.50"
//  option3="Rs. 175"
//  option4="Rs. 180"/>

// <Quest qustionNumber=""
// SubqustionNumber="1(d)."
//  questionIntro=""
//  question="If 5500 copies are published and the transportation cost on them amounts to Rs. 82500, then what should be the selling price of the book so that the publisher can earn a profit of 25%?"
//  questionimage=""
//  option1="15°"
//  option2="24°"
//  option3="54°"
//  option4="48°"/>

// <Quest qustionNumber=""
// SubqustionNumber="1(e)."
//  questionIntro=""
//  question="Royalty on the book is less than the printing cost by:"
//  questionimage=""
//  option1="5%"
//  option2="20%"
//  option3="25%"
//  option4="16%"/>
// </>

// {/* DataInterpatation Question 2 */}
// <>
// <Quest qustionNumber="2."
// SubqustionNumber="2(a)"
// questionIntro="Study the following graph carefully and answer the questions given below: Distribution of candidates who were enrolled for MBA entrance exam and the candidates (out of those enrolled) who passed the exam in different institutes:"
// question="What percentage of candidates passed the Exam from institute T out of the total number of candidates enrolled from the same institute?"
//  questionimage="/assets/DataInterpatation/datainter2.png"
//  option1="50%"
//  option2="2.5%"
//  option3="75%"
//  option4="80%"/>

// <Quest qustionNumber=""
// SubqustionNumber="2(b)."
//  questionIntro=""
//  question="Which institute has the highest percentage of candidates passed to the candidates enrolled?"
//  option1="Q"
//  option2="R"
//  option3="V"
//  option4="T"/>

// <Quest qustionNumber=""
// SubqustionNumber="2(c)."
//  questionIntro=""
//  question="The number of candidates passed from institutes S and P together exceeds the number of candidates enrolled from institutes T and R together by:

// "
//  questionimage=""
//  option1="228"
//  option2="279"
//  option3="399"
//  option4="407"/>

// <Quest qustionNumber=""
// SubqustionNumber="2(d)."
//  questionIntro=""
//  question="What is the percentage of candidates passed to the candidates enrolled for institutes Q and R together?"
//  questionimage=""
//  option1="68%"
//  option2="80%"
//  option3="74%"
//  option4="65%"/>

// <Quest qustionNumber=""
// SubqustionNumber="1(e)."
//  questionIntro=""
//  question="What is the ratio of candidates passed to the candidates enrolled from institute P?"
//  questionimage=""
//  option1="9:11"
//  option2="14:17"
//  option3="6:11"
//  option4="9:17"/>
// </> 
// {/* DataInterpatation Question 3 */}
// <>
// <Quest qustionNumber="3."
// SubqustionNumber="3(a)"
// questionIntro="What is the ratio of the total sales of branch B2 for both years to the total sales of branch B4 for both years?"
//  questionimage="/assets/DataInterpatation/datainter.png"
//  option1="2:3"
//  option2="3:5"
//  option3="4:5"
//  option4="7:9"/>

// <Quest qustionNumber=""
// SubqustionNumber="3(b)."
//  questionIntro=""
//  question="Total sales of branch B6 for both the years is what percent of the total sales of branches B3 for both the years?"
//  option1="68.54%"
//  option2="71.11%"
//  option3="73.17%"
//  option4="75.55%"/>

// <Quest qustionNumber=""
// SubqustionNumber="3(c)."
//  questionIntro=""
//  question="What percent of the average sales of branches B1, B2 and B3 in 2001 is the average sales of branches B1, B3 and B6 in 2000?"
//  questionimage=""
//  option1="75%"
//  option2="77.5%"
//  option3="82.5%"
//  option4="87.5%"/>

// <Quest qustionNumber=""
// SubqustionNumber="3(d)."
//  questionIntro=""
//  question="What is the average sales of all the branches (in thousand numbers) for the year 2000?"
//  questionimage=""
//  option1="73"
//  option2="80"
//  option3="83"
//  option4="88"/>

// <Quest qustionNumber=""
// SubqustionNumber="3(e)."
//  questionIntro=""
//  question="Total sales of branches B1, B3 and B5 together for both the years (in thousand numbers) is?"
//  questionimage=""
//  option1="250"
//  option2="310"
//  option3="435"
//  option4="560"/>
// </>

// {/* DataInterpatation Question 4 */}
// <>
// <Quest qustionNumber="4."
// SubqustionNumber="4(a)"
// questionIntro="A cosmetic company provides five different products. The sales of these five products (in lakh number of packs) during 1995 and 2000 are shown in the following bar graph.
// Sales (in lakh number of packs) of five different products of Cosmetic Company during 1995 and 2000"
// question="The sales of lipsticks in 2000 was by what percent more than the sales of nail enamels in 2000? (rounded off to nearest integer)"
//  questionimage="/assets/DataInterpatation/datainter4.png"
//  option1="33%"
//  option2="31%"
//  option3="28%"
//  option4="22%"/>

// <Quest qustionNumber=""
// SubqustionNumber="4(b)."
//  questionIntro=""
//  question="During the period 1995-2000, the minimum rate of increase in sales is in the case of?"
//  option1="Shampoos"
//  option2="Nail enamels"
//  option3="Talcum powders"
//  option4="Lipsticks"/>

// <Quest qustionNumber=""
// SubqustionNumber="4(c)."
//  questionIntro=""
//  question="What is the approximate ratio of the sales of nail enamels in 2000 to the sales of Talcum powders in 1995?"
//  questionimage=""
//  option1="7:2"
//  option2="5:2"
//  option3="4:3"
//  option4="2:!"/>

// <Quest qustionNumber=""
// SubqustionNumber="4(d)."
//  questionIntro=""
//  question="The sales have increase by nearly 55% from 1995 to 2000 in the case of?"
//  questionimage=""
//  option1="Lipsticks"
//  option2="Nail enamels"
//  option3="Talcum powders"
//  option4="Shampoos"/>

// <Quest qustionNumber=""
// SubqustionNumber="4(e)."
//  questionIntro=""
//  question="The sales of conditioners in 1995 was by what percent less than the sales of shampoos in 1995? (rounded off to nearest integer)"
//  questionimage=""
//  option1="57%"
//  option2="36%"
//  option3="29%"
//  option4="25%"/>
// </>
// </> */}

// {/* All five Verbal question */}
//  <>
// {/* Verbal queston 1 */}
// <Quest qustionNumber="1."
// SubqustionNumber=""
// questionIntro=""
// question=""
// questionimage="/assets/NonVerbal/Non-verbal1.png"
// option1="1"
// option2="2"
// option3="3"
// option4="4"/>
// {/* Verbal queston 2 */}
// <Quest qustionNumber="2."
// SubqustionNumber=""
// questionIntro=""
// question=""
// questionimage="/assets/NonVerbal/Non-verbal2.png"
// option1="1"
// option2="2"
// option3="3"
// option4="4"/>
// {/* Verbal queston 3 */}
// <Quest qustionNumber="3."
// SubqustionNumber=""
// questionIntro=""
// question=""
// questionimage="/assets/NonVerbal/Non-verbal3.png"
//  option1="1"
//  option2="2"
//  option3="3"
//  option4="4"/>
// {/* Verbal queston 4 */}
// <>
// <Quest qustionNumber="4."
// SubqustionNumber=""
//  questionIntro=""
//  question=""
//  questionimage="/assets/NonVerbal/Non-verbal4.png"
//  option1="20"
//  option2="22"
//  option3="24"
//  option4="27"/>
// </>
// {/* Verbal queston 5 */}
// <Quest qustionNumber="5."
// SubqustionNumber=""
// questionIntro=""
// question=""
// questionimage="/assets/NonVerbal/Non-verbal5.png"
//  option1="1"
//  option2="2"
//  option3="3"
//  option4="4"/>

// </> 