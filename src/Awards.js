import React from 'react';
import './Awards.css';
import AwardItem from './AwardItem';

class Awards extends React.Component{
    render(){
        return(
            <div class="awards-div">
                <div class="awards-div-container">
                    <div class="awards-title">
                        My Awards
                    </div>
                    <div class="awards-content">
                        <AwardItem title="SHAD" award="Accepted into SHAD 2020 Summer Program" details="" date="Feb 2020"></AwardItem>
                        <AwardItem title="Canadian Computing Competition" award="Honor Roll Group 2" details="Received a score of 71/75 on the Jr" date="Feb 2020"></AwardItem>
                        <AwardItem title="DECA Provincials (ACT)" award="Top 20 Oral 1" details="Received a 95/100 on my oral case" date="Feb 2020"></AwardItem>
                        <AwardItem title="Canadian Open Mathematics Challenge" award="Southwestern Ontario Honor Roll" details="Received a score of 54/80 " date="Jan 2020"></AwardItem>
                        <AwardItem title="MLH Hack Day" award="3rd Place Hack" details="created digitizing automatic cue card generator web application" date="Dec 2019"></AwardItem>
                        <AwardItem title="Hack the Hammer" award="Overall Security Hack" details="created blockchain whistleblower complaint webapp" date="Dec 2019"></AwardItem>
                        <AwardItem title="Beaver Computing Competition" award="First Place Honor Roll" details="Received Perfect Score" date="Nov 2019"></AwardItem>
                        <AwardItem title="Canadian Intermediate Mathematics Challenge" award="Distinction" date="Nov 2019"></AwardItem>
                        <AwardItem title="Fryer" award="Honor Roll Group 3" details="Received a score of 38/40" date="Apr 2019"></AwardItem>
                        <AwardItem title="Canadian Computing Competition" award="Distinction" details="Received a score of 60/75 on the Jr" date="Feb 2019"></AwardItem>
                        <AwardItem title="Pascal" award="Distinction" date="Feb 2019"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="12th Overall" date="2019"></AwardItem>
                        <AwardItem title="Caribou Math" award="6th Overall" date="2018-2019"></AwardItem>
                        <AwardItem title="DECA Regionals (PFN)" award="Top 10 Oral Case" date="Nov 2018"></AwardItem>
                        <AwardItem title="The Canadian Math Kangaroo Contest" award="National Silver Medal; Waterloo Regional First Place" date="2018"></AwardItem>
                        <AwardItem title="Polar Expressions Writing Contest" award="Published Writer" date="2018"></AwardItem>
                        <AwardItem title="Canadian Intermediate Mathematics Challenge" award="Distinction" date="Nov 2018"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="9th Overall" date="2018"></AwardItem>
                        <AwardItem title="Mathematica Centrum Lagrange" award="51st Overall" date="2018"></AwardItem>
                        <AwardItem title="Caribou Math" award="25th Overall" date="2017-2018"></AwardItem>
                        <AwardItem title="Mathematica Centrum Euler" award="1st Overall" date="2017"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="5th Overall" date="2017"></AwardItem>
                        <AwardItem title="The Canadian Math Kangaroo Contest" award="National Gold Medal; Waterloo Regional First Place" date="2017"></AwardItem>
                        <AwardItem title="AMC 8" award="Distinguished Honor Roll Top 1%" date="2017"></AwardItem>
                        <AwardItem title="Caribou Math" award="21st Overall" date="2016-2017"></AwardItem>
                        <AwardItem title="The Canadian Math Kangaroo Contest" award=" National Gold Medal; Waterloo Regional Third Place" date="2016"></AwardItem>
                        <AwardItem title="Mathematica Centrum Pythagoras" award="63rd Overall" date="2016"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="18th Overall" date="2016"></AwardItem>
                        <AwardItem title="Caribou Math" award="4th Overall" date="2015-2016"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="6th Overall" date="2015"></AwardItem>
                        <AwardItem title="Mathematica Centrum Fibonaccian" award="20th Overall" date="2015"></AwardItem>
                        <AwardItem title="The Canadian Math Kangaroo Contest" award="Top 2% in Canada; Waterloo Region Silver Medal" date="2015"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="13th Overall" date="2014"></AwardItem>
                        <AwardItem title="Mathematica Centrum Byron-Germain" award="20th Overall" date="2014"></AwardItem>
                        <AwardItem title="Provincial Chess Challenge" award="10th Overall" date="2013"></AwardItem>
                        <AwardItem title="Mathematica Centrum Thales" award="67th Overall" date="2013"></AwardItem>



                    </div>
                    {/*<div class="Awards-bottomtriangle"></div>*/}
                    <div class="footer-div-awards">
                        <div class="footer-copyright">©️ Daniel Yu | All Rights Reserved <br/>Developed as a side project</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Awards
