import "./scss/iso.scss";

export const 기업부설연구소=()=>{
    const title="기업부설연구소/연구개발전담부서"
    const content="기업부설연구소/연구개발전담부서 인정 제도는 기업 내부에 독립된 연구개발기관을 설립하고 육성해 일정요건을 갖춘 연구개발전담조직을 한국산업기술진흥협회에 신고하고 인정받아 기업내 독립된 연구조직을 육성하고자 하는 제도입니다."
    const content2="기업부설연구소/연구개발전담부서 인정 제도는 기업내 독립된 연구조직을 육성하고 연구개발활동에 따른 지원혜택을 부여해 기업의 연구개발을 촉진하는 것에 목적이 있습니다."
    const content3="기업부설연구소로 인정받기 위해서는 기업 규모에 따라 2~10명 이상의 연구전담요원이 있어야 하고, 연구개발전담부서로 인정받기 위해서는 기업 규모와 관계없이 1명 이상의 연구전담요원이 있어야 합니다."
    const 혜택 = "<공통 혜택>";
    const 혜택내용 = [
        "▸ 산업기술 연구개발 물품 관세감면",
        "▸ 연구 및 인력개발비 세액공제",
        "▸ 연구원 연구활동비 소득세 비과세",
        "▸ 산업기술 연구개발 물품 관세감면",
        "▸ 고경력 연구인력 채용 사업",
        "▸ 각종 과세특례",

    ]
    const 특이사항 = "* 기업부설연구소에만 적용되는 혜택: 기업부설연구소용 부동산 지방세 감면, 전문연구요원제도"
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
                {혜택}
                <br/>
                <br/>
                {
                    혜택내용.map((content,idx)=>{
                        return(
                            <div key={idx}>{content}</div>
                        )
                    })
                }
                <br/>
                <br/>
                {특이사항}
            </div>
            </div>
            
        </section>
        <div className="ISOlinebox"></div>
        
        </>
    )
}

export const 기업부설창작연구소=()=>{
    const title="기업부설창작연구소/창작전담부서"
    const content="기업부설창작연구소/창작전담부서 인정제도는 문화콘텐츠 산업의 창작개발활동을 수행하는 기업을 대상으로 일정요건을 갖춘 기업부설창작연구소와 창작전담부서를 인정하고 조세감면 등의 혜택을 부여하는 제도입니다.";
    const content2="기업부설창작연구소/창작전담부서 인정제도는 문화산업의 창작개발 촉진하는 것에 목적이 있습니다."
    const content3=" 기업부설창작연구소로 인정받기 위해서는 기업규모에 따라 창작전담요원이 3~10명이상이 있어야합니다. 창작전담부서로 인정받기 위해서는 기업 규모와 관계없이 1명 이상의 창작전담요원이 있어야 합니다."
    const 혜택 = "<혜택과 기대효과>";
    const 혜택내용 = [
        "▸ 인력개발비 + 연구 및 인력개발을 위한 설비투자비 세액공제",
"▸ 벤처기업육성에 관한 특별조치법 제2조의 2에 따른 벤처기업의 연구개발비 충족요건",
"▸ 문화기술(CT) R&D지원 가점부여 혜택",
"▸ 세제 지원을 통한 문화기술 및 콘텐츠기업의 실질적 혜택 지원",
"▸ 콘텐츠기업 창작개발 활성화를 할 수 있는 물적, 인적기반마련"
    ];

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
                {혜택}
                <br/>
                <br/>
                {
                    혜택내용.map((content,idx)=>{
                        return(
                            <div key={idx}>{content}</div>
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