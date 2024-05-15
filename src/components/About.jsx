import React from 'react'

const About = () => {
  return (
    <div>
       <div id="aboutMe" className="section2">
            <div className="section2_block1">
                <h2>Цифровые сферы, которые я хочу изучить<br />на все 100%</h2>
            </div>
            <div className="section2_block2">
                <div className="section2_block2_cards">
                    <div className="section2_block2_title">
                        <img src="./image/Group 1.png" alt=""/>
                        <h3 className="cards1-2">UX Research</h3>
                    </div>
                    <div className="section2_block2_span">
                        <span>Исследование пользовательского опыта (UX Research) - изучение поведения и потребностей пользователей в целях улучшения пользовательского опыта при взаимодействии с продуктами или услугами.</span>
                    </div>
                </div>
                <div className="section2_block2_cards">
                    <div className="section2_block2_title">
                        <img src="./image/Group 2.png" alt="" />
                        <h3 className="cards1-2">Brand Design</h3>
                    </div>
                    <div className="section2_block2_span">
                        <span>Дизайн бренда (Brand Design) - разработка визуальной идентичности и образа компании или продукта для выражения ее уникальных ценностей, миссии и отличительных черт перед целевой аудиторией.</span>
                    </div>
                </div>
                <div className="section2_block2_cards">
                    <div className="section2_block2_title">
                        <img src="./image/Group 3.png" alt="" />
                        <h3>Web Development</h3>
                    </div>
                    <div className="section2_block2_span">
                        <span>Веб-разработка (Web Development) - создание и поддержка веб-сайтов, веб-приложений и других цифровых продуктов для обеспечения их функциональности, производительности и удобства использования.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
