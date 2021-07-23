import "./scss/iso.scss";
export const 가족친화인증=()=>{
    const title="가족친화인증"
    const content ="가족친화인증은 가족 친화적인 사회환경 조성을 위해 여성가족부에서 발급하는 인증으로, 가족친화제도를 모범적으로 운영하는 기업 및 공공기관에 심사를 통해 인증을 부여하는 제도입니다. 가족친화인증을 받은 기업을 가족친화기업이라고 합니다.";
    const content2="가족친화제도는 시차 출퇴근제, 재택근무제 등의 탄력적 근무제도, 자녀 출산∙양육∙교육 지원제도, 부양가족 지원제도, 근로자 지원제도와 정시퇴근제, 육아데이 등의 가족관계 증진제도, 가족 여가문화 촉진제도, 가족친화 사회공헌제도를 말합니다."
    const 가족친화 = "<가족친화인증 기대효과> "
    const 가족친화혜택 = ["▸ 근로자 스트레스 감소, 동료 및 상사와의 관계증진",
    "▸ 근로자의 삶의 질 향상과 직무 만족도 증가",
    "▸기업 사회적 이미지 개선",
    "▸ 이직율과 결근율 감소",
    "▸ 우수인력의 확보",
    "▸ 기업 생산성 증가"]
    
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
                {가족친화}
                <br/>
                <br/>
                {
                    가족친화혜택.map((item,idx)=>{
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

export const 병역특례업체=()=>{
    const title="병역특례업체"
    const content ="병역특례제도는 국가산업의 발전과 경쟁력 제고를 위한 제도로 산업기능요원, 전문연구요원이 해당하는 대체복무제도입니다. 군 필요인원에 지장이 없는 범위 내에서 선정된 병역지정업체에 제조∙생산∙연구 인력으로 병역 인력의 일부를 활용하는 제도입니다.";
    const content2="병역특례업체는 매년 6월 신청하고 신청 자격을 갖추고 지원한 중소기업 중 병무청장이 선정한 업체가 지정됩니다."
    const 병역특례업체 = "<병역특례업체 혜택>"
    const 병역특례업체혜택 = ["▸ 고급인력 저임금 지원으로 인력 수급에 대한 어려움 해소",
        "▸ 3개월 인턴 기간 부여로 기업 인재상에 맞는 인재 선정 가능",
        "▸ 기업의 안정성, 수익성 검증으로 신뢰도 상승과 기업 홍보 효과"
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
                {병역특례업체}
                <br/>
                <br/>
                {
                    병역특례업체혜택.map((item,idx)=>{
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

export const 노사문화우수기업=()=>{
    const title="노사문화 우수기업"
    const content ="노사문화 우수기업 인증은 바람직한 노사문화를 형성하고 확산하기 위한 제도로, 협력적 노사문화 확산과 기업경쟁력 강화를 위해 상생의 노사문화와 사회적 책임을 모범적으로 실천하고 있는 기업을 선정하고 지원하는 제도입니다.";
    const content2="직전연도까지 2년간의 기업 노사문화 추진 실적을 작성하여 신청하고 1,2차 심사를 거쳐 노사문화 우수기업이 선정됩니다."
    const 노사문화우수기업 = "<노사문화 우수기업 인증 혜택>"
    const 노사문화우수기업혜택 = ["▸ 3년간 정기 근로감독 면제",
        "▸ 세무조사 유예",
        "▸ 대출 금리, 신용 보증 한도 우대 등의 행정∙금융상 혜택"]
    
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
                {노사문화우수기업}
                <br/>
                <br/>
                {
                    노사문화우수기업혜택.map((item,idx)=>{
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
export const 청년친화강소기업=()=>{
    const title="청년친화 강소기업"
    const content ="청년친화 강소기업은 청년들의 중소기업에 대한 인식 개선을 통해 청년들에게는 좋은 일자리를 제공하고 기업은 우수인재를 확보하도록 하는 목적으로 고용노동부에서 시행하는 제도입니다."
    const content2="강소기업은 작지만 경쟁력을 갖춘 기업이라는 뜻으로 고용유지율과 신용평가등급이 높고 임금체불이 없는 등 일정 요건을 만족하는 우수한 중소기업입니다. 청년친화 강소기업은 강소기업으로 선정된 기업 중 청년들이 근무하기 좋은 요건을 갖췄다고 판단되는 기업으로, 임금, 일 생활균형, 고용안정성, 청년고용 실적을 기준으로 선정됩니다."
    const 청년친화강소기업 = "<청년친화 강소기업 인증 혜택>"
    const 청년친화강소기업혜택 = ["▸ 맞춤형 채용지원 서비스 제공",
        "▸ 금융우대",
        "▸ 정기 세무조사 제외 기업 선정 시 우대", 
        "▸ 병역특례업체 지정 시 가점 부여"
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
                {청년친화강소기업}
                <br/>
                <br/>
                {
                    청년친화강소기업혜택.map((item,idx)=>{
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
export const 인재육성형중소기업=()=>{
    const title="인재육성형 중소기업"
    const content ="인재육성형 중소기업은 인재에 대한 투자를 통해 생산성을 향상시키고 이를 직원에게 보상함으로써 기업과 근로자가 함께 성장하는 기업 발굴을 위해 중소벤처기업부에서 시행하는 제도입니다.";
    const content2="인재육성형 중소기업은 기술과 연구개발 등에서 전문적인 지식과 역량을 갖춘 우수인력을 채용하거나 교육훈련에 투자 등 모범적으로 인재를 육성하는 기업입니다."
    const 인재육성형중소기업 = "<인재육성형 중소기업 인증 혜택>"
    const 인재육성형중소기업혜택 = ["▸ 인재육성형 중소기업 전용 자금 신청 자격 부여 ",
        "▸ 중소벤처기업진흥공단 정책자금 융자 한도 상향",
        "▸ 취업포털 사이트와 연계된 채용 공고 지원",
        "▸ 병역특례업체 지정 가점 부여",
        "▸ 중소벤처기업부 지원 기술개발사업 가점 부여",
        "▸ 무역촉진단 파견사업 가점 부여",
        "▸ 홍보물 제작, 인터넷, SNS, 언론 등 홍보 지원"
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
                {인재육성형중소기업}
                <br/>
                <br/>
                {
                    인재육성형중소기업혜택.map((item,idx)=>{
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

export const 공동근로복지기금설립=()=>{
    const title="공동근로복지기금설립"
    const content ="공동근로복지기금은 기업 이익의 일부를 재원으로 설치하는 사내근로복지기금으로 공동근로복지기금을 효율적으로 관리하고 운영해 근로자의 생활 안정과 복지 증진에 도움이 되는 것에 목적이 있습니다.";
    const content2="공동근로복지기금 임의사항으로 법적 의무사항이 아닙니다. 설립을 원하는 기업에서는 기금법인설립 준비위원회를 구성하고 기금법인설립 인가 신청을 통해 설립을 신청할 수 있습니다."
    const 공동근로복지기금설립 = "<인재육성형 중소기업 기대 효과>    "
    const 공동근로복지기금설립혜택 = ["▸ 협력적 노사관계 조정, 생산성 제고",
        "▸ 기금 출연액 비용 인정으로 법인세 면제 ",
        "▸ 다양한 근로자 복지수요에 능동적 대처 가능",
        "▸ 저소득 근로자의 생활 안정 지원",
        "▸ 기금 지급 장학금, 금품 등에 대해 증여세 비과세"
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
                <br/>
                {공동근로복지기금설립}
                <br/>
                <br/>
                {
                    공동근로복지기금설립혜택.map((item,idx)=>{
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