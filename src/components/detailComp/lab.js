import "./scss/iso.scss";

export const 기업부설연구소=()=>{
    const title="기업부설연구소/연구개발전담부서"
    const content="기업부설연구소/연구개발전담부서 인정제도는 일정 요건을 갖춘 기업 내에 독립된 연구개발기관을 설립하여 육성하는 정부지원 제도이며, 중소기업의 연구개발활동을 촉진시키기 위한 것에 목표가 있습니다.한국산업기술진흥협회로부터 인증을 받으면, 연구개발활동에 필요한 많은 정부지원을 받으실 수 있습니다.기업부설연구소와 연구개발전담부서는 연구전담요원 구성 인원 수에 따라 구분됩니다. 기업부설연구소로 인정받기 위해서는 연구전담요원이 2~10명이상으로, 기업 규모에 따라 조건이 달라집니다. 연구개발전담부서로 인정받기 위해서는 기업규모에 상관없이 연구전담요원이 1명 이상이면 가능합니다. 기업부설연구소와 연구개발전담부서의 혜택은 병역특례와 부동산지방세감면 등을 제외한 나머지는 동일합니다.";
    const 혜택 = "-혜택-";
    const 혜택내용 = ["1. 산업기술 연구개발물품 관세감면","2. 연구 및 인력개발비 세액공제","3. 통합투자세액공제","4. 연구원 연구활동비 소득세 비과세","5. 기업부설연구소용 부동산 지방세 감면(ㅇ/x)","6. 외국인기술자 소득세 감면","7. 연구개발특구 첨단기술기업 등 법인세 감면","8. 각종 과세특례","9. 병역특례 (ㅇ/x)"];
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
                {혜택}
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

export const 기업부설창작연구소=()=>{
    const title="기업부설창작연구소/창작전담부서"
    const content="기업부설창작연구소/창작전담부서 인정제도는 문화산업의 창작개발을 촉진하기 위하여 일정요건을 갖춘 기업부설창작연구소와 창작전담부서의 연구조직을 효율적으로 육성 및 지원하기위한 제도입니다. 지원대상은 문화콘텐츠 산업의 창작개발활동을 수행하는 기업입니다.기업부설창작연구소와 창작전담부서는 창작전담요원 구성 인원 수에 따라 구분됩니다. 기업부설창작연구소로 인정받기 위해서는 창작전담요원이 3~10명이상으로, 기업규모에 따라 조건이 달라집니다. 창작전담부서로 인정받기 위해서는 기업 규모에 상관없이 1명 이상이면 가능합니다.";
    const 혜택 = "-혜택-";
    const 혜택내용 = ["인력개발비 + 연구 및 인력개발을 위한 설비투자비 세액공제","2. 벤처기업육성에 관한 특별조치법 제2조의 2에 따른 벤처기업의 연구개발비 충족요건","3. 문화기술(CT) R&D지원 가점부여 혜택"];
    const 기대효과 ="-기대효과-"
    const 기대효과내용=["세제 지원을 통한 문화기술 및 콘텐츠기업의 실질적 혜택 지원","콘텐츠기업 창작개발 활성화를 할 수 있는 물적, 인적기반마련"]
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
                {혜택}
                <br/>
                {
                    혜택내용.map((content,idx)=>{
                        return(
                            <div key={idx}>{content}</div>
                        )
                    })
                }
                <br/>
                {기대효과}
                <br/>
                {
                    기대효과내용.map((content,idx)=>{
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