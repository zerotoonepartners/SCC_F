import "./scss/iso.scss";
export const 성과공유기업=()=>{
    const title="성과공유기업"
    const content ="최근 기업에서 성과급의 공정성, 투명성과 관련된 논쟁이 확산되며 이에 대한 해결책으로 정부에서는 성과공유기업에 대한 세제혜택을 신설했습니다."
    const content2 = "성과공유기업은 기업이 근로자의 임금과 복지수준의 향상을 위해 근로자와 기업의 성과를 공유하고 있거나, 공유하기로 약정한 기업입니다. 경영성과급, 임금상승률, 내일채움공제, 청년내일채움공제, 직무발명보상, 우리사주, 스톡옵션, 사내근로복지기금의 총 8가지 성과 공유 협약 중 1가지 이상 협약의 조건을 충족하여 근로자와 성과를 공유하고 있거나 공유하기로 약정했다면 성과공유기업으로 인증 받을 수 있습니다."
    const 혜택 = "<성과공유기업 인증 혜택>"
    const 혜택들 = ["▸ 근로자에게 지급하는 경영성과급의 법인세 10% 세액 공제",
        "▸ 근로자가 수령하는 경영성과급의 근로소득세 증가분 50% 세액 공제",
        "▸ 중소기업 지원 사업 평가 가점 부여",
        "▸ 인재육성형 중소기업 지정 평가 가점 부여",
        "▸ 병역지정업체 선정 평가 가점 부여"
        
        ]
    
    return(
        <>
        <section className="ISOsec">
            <div className="ISObox">
            <div className="ISOtitle">
                {title}
            </div>
            <div className="ISOcontent"> 
                {content}
                <br/>
                {content2}
                <br/>
                <br/>
                {혜택}
                <br/>
                <br/>
                {
                    혜택들.map((item,idx)=>{
                        return(
                            <div key={idx}>{item}</div>
                        )
                    })
                }
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}
export const 여성기업=()=>{
    const title="여성기업"
    const content ="정부에서는 여성기업의 활동과 여성의 창업을 지원하여 경제영역에서 남녀의 실질적인 평등과 여성의 경제활동을 도모하기 위해 여성기업제도를 시행하고 있습니다. 여성기업 이란 여성이 소유하고 경영하는 기업으로, *여성기업지원에 관한 법률 시행령 제 2조에 해당하는 기업입니다.";
    const content2 = " *여성기업지원에 관한 법률 시행령 제 2조: 상법상 회사의 경우 대표가 여성이며 최대출자자, 여성이 사업자등록을 한 개인사업자, 협동조합기본법에 따른 일반협동조합";
    const 혜택 = "<여성기업 인증 혜택>"
    const 혜택들 = ["▸ 창업경진대회, 여성벤처펀드, 여성벤처활성화, 여성기업 전용 R&D,여성가장 창업자금 등 정부지원사업의 대상",
        "▸ 창업기업지원, 기술개발사업지원, 지역특화산업 육성, 스마트공장구축 지원사업 우대",
        "▸ 중소기업 연수사업, 중소기업 컨설팅 지원, 중소기업 연구인력 지원 등의 사업 우대" 
        ]
    
    return(
        <>
        <section className="ISOsec">
            <div className="ISObox">
            <div className="ISOtitle">
                {title}
            </div>
            <div className="ISOcontent"> 
                {content}
                <br/>
                {content2}
                <br/>
                <br/>
                {혜택}
                <br/>
                <br/>
                {
                    혜택들.map((item,idx)=>{
                        return(
                            <div key={idx}>{item}</div>
                        )
                    })
                }
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}


export const 이노비즈=()=>{
    const title="이노비즈"
    const content ="기술경쟁력과 미래 성장가능성을 갖춘 중소기업의 성장을 지원하기 위해 정부에서는 이노비즈 인증제도를 시행하고 있습니다. ‘이노비즈(Innobiz)’는 Innovation과 Business의 합성어로, 중소벤처기업부에서 선정한 기술혁신형 중소기업을 말합니다."
    const content2="제조업, 건설업, 농업, 비제조업, 소프트웨어업 등의 제품 및 공정중심 기술 분야에 해당하는 기업 중 기업 업력이 3년 이상인 중소기업이 대상이 됩니다."
    const 혜택 = "<이노비즈 인증 혜택>"
    const 혜택들 = ["▸ 세제 : 대도시 법인 중과세 면제, 정기 세무조사의 유예, 기술평가보증 금액 보증, 매출채권 보험료 할인, 코스닥 상장지원 등",
        "▸ R&D : 기술개발 지원, 스마트공장 고도화 지원",
        "▸ 수출 : 물품구매 적격 심사 가점 부여, 해외규격인증 획득의 지원",
        "▸ 각종 방송광고 지원 "
        
        ]
    
    return(
        <>
        <section className="ISOsec">
            <div className="ISObox">
            <div className="ISOtitle">
                {title}
            </div>
            <div className="ISOcontent"> 
                {content}
                <br/>
                {content2}
                <br/>
                <br/>
                {혜택}
                <br/>
                <br/>
                {
                    혜택들.map((item,idx)=>{
                        return(
                            <div key={idx}>{item}</div>
                        )
                    })
                }
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}

export const 메인비즈=()=>{
    const title="메인비즈"
    const content ="제품 및 공정중심의 기술혁신형 중소기업을 지원하는 이노비즈 제도와 달리, 메인비즈 제도는 마케팅, 조직혁신 등 비기술 분야에서 경쟁력 있고 성장가능성 있는 중소기업을 육성하기 위해 정부에서 도입한 제도입니다.";
    const content2 = "'메인비즈(mainbiz)'는 Management, Innovation, Business의 합성어로 중소벤처기업부에서 선정한 경영혁신형 중소기업을 의미합니다. 경영혁신이란 기업 경쟁력 제고를 위해 조직구조, 업무방식 등에서 새로운 경영기법을 개발하거나 개선하는 것을 말합니다."
    const 혜택 = "<메인비즈 인증 혜택>"
    const 혜택들 = ["▸ 세제 : 정기 세무조사의 유예, 금리우대, 정책자금 지원, 보증 우대, 매출채권 보험료 할인, 무역보증 지원",
        "▸ R&D : 도시주택 관련 기술∙제품개발 지원",
        "▸ 수출혜택 : 나라장터 물품 구매 적격심사 가점 부여, 글로벌 강소기업 육성사업 신청기준 완화",
        "▸ 각종 광고방송 지원" 
        ]
    
    return(
        <>
        <section className="ISOsec">
            <div className="ISObox">
            <div className="ISOtitle">
                {title}
            </div>
            <div className="ISOcontent"> 
                {content}
                <br/>
                {content2}
                <br/>
                <br/>
                {혜택}
                <br/>
                <br/>
                {
                    혜택들.map((item,idx)=>{
                        return(
                            <div key={idx}>{item}</div>
                        )
                    })
                }
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}

export const 뿌리기술전문기업=()=>{
    const title="뿌리기술 전문기업"
    const content ="뿌리기술은 6대 뿌리기술인 주조, 금형, 소성가공, 용접, 표면처리, 열처리 등을 포함한 공정기술을 뜻합니다. 국가에서는 6가지 핵심뿌리기술을 활용하여 영위하는 기업을 ’뿌리기업’으로 지정하고, 뿌리기술의 확산을 촉진하기 위해 뿌리기업에 각종 우대사항을 적용해 글로벌 경쟁력을 갖춘 기업으로 육성하고 있습니다."
    const content2 = "뿌리기업이 되기 위해서는 기업 매출액 중 뿌리기술을 이용한 매출액이 절반 이상이고, 기술과 경영 역량을 갖추고 있어야 합니다."
    const 뿌리 = "<뿌리기술 전문기업 인증 혜택>"
    const 뿌리혜택 =["▸ 글로벌 강소기업 육성사업, 뿌리기업 공정기술개발 지원사업 우대","▸ 중소기업 기술혁신개발사업, 제품서비스 기술개발사업, 구매조건부 신제품 개발사업 등 각종 기술개발 지원사업 우대","▸ 공정혁신 ∙ 애로기술 ∙ 인력공급 ∙ 정책자금 및 금융 등의 다양한 지원사업 분야에서 우대"]
    return(
        <>
        <section className="ISOsec">
            <div className="ISObox">
            <div className="ISOtitle">
                {title}
            </div>
            <div className="ISOcontent"> 
                {content}
                <br/>
                {content2}
                <br/>
                <br/>
                {뿌리}
                <br/>
                <br/>
                {
                    뿌리혜택.map((item,idx)=>{
                        return(
                            <div key={idx}>{item}</div>
                        )
                    })
                }
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}
export const 벤처기업=()=>{
    const title="벤처기업"
    const content ="벤처기업은 Venture와 Company의 합성어로 모험적인 사업을 하는 기업입니다. 일반적으로 사업의 위험성은 높지만 혁신성과 성장성을 보유한 기업을 의미합니다."
    const content2="정부는 벤처기업의 성장을 장려하기 위해 벤처기업으로 인정된 기업에게 우대제도를 지원하는 벤처기업 확인제도를 도입했습니다."
    const content3="법적으로 ｢벤처기업 육성에 관한 특별 조치법｣의 벤처기업의 요건에 모두 해당하는 기업 중 중소기업 평가기관으로부터 기술 및 경영혁신 능력을 증명하기위한 평가절차를 거쳐 벤처기업 확인을 받을 수 있습니다."
    const 벤처 = "<벤처기업 인증 혜택>"
    const 벤처혜택 = [ "▸ 법인세, 소득세, 취득세, 재산세 감면 ","▸ 코스닥 상장 심사와 신용보증 심사 기준 완화 ","▸ 기업시설 입지 관련 혜택 부여","▸ 특허 우선심사","▸ 방송광고비 일부 감면","▸ 주식 교환 " ];
    return(
        <>
        <section className="ISOsec">
            <div className="ISObox">
            <div className="ISOtitle">
                {title}
            </div>
            <div className="ISOcontent"> 
                {content}
                <br/>
                {content2}
                <br/>
                {content3}
                <br/>
                <br/>
                {벤처}
                <br/>
                <br/>
                {
                    벤처혜택.map((item,idx)=>{
                        return(
                            <div key={idx}>{item}</div>
                        )
                    })
                }
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}