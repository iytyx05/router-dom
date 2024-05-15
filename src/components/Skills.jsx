import React from 'react'

const Skills = () => {
  return (
    <div>
        <div id="skill" className="section3">
            <div className="section3_block1">
                <h3>Skills</h3>
                <span>
                    Я работаю в таких программах как</span>
            </div>
            <div className="section3_block2">
                <div className="section3_block2_skills">
                    <div className="section3_block2_skill">
                        <img src="./image/skill1.png" alt="" />
                        <span>Adobe <br /></span>
                    </div>
                    <div className="section3_block2_stars">
                        <img src="./image/star4.png" alt="" /> 
                    </div>
                </div>
                <div className="section3_block2_skills">
                    <div id="skill2" class="section3_block2_skill">
                        <img src="./image/skill2.png" alt="" />
                        <span>Figma</span>
                    </div>
                    <div className="section3_block2_stars">
                        <img src="./image/star4.png" alt="" /> 
                    </div>
                </div>
                <div className="section3_block2_skills">
                    <div className="section3_block2_skill">
                        <img src="./image/skill3.png" alt="" />
                        <span>VS code</span>
                    </div>
                    <div className="section3_block2_stars">
                        <img src="./image/star4.png" alt="" /> 
                    </div>
                </div>
                <div className="section3_block2_skills">
                    <div className="section3_block2_skill">
                        <img src="./image/skill4.png" alt="" />
                        <span>Git Hub</span>
                    </div>
                    <div className="section3_block2_stars">
                        <img src="./image/star3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
