import "./scss/iso.scss"

export const ISO9001=()=>{
    const title="ISO 9001 : 품질경영시스템"
    const content ="ISO 9001은 국제표준화기구에서 제정한 규격으로 조직이 제품 및 서비스의 품질을 지속적으로 발전시키기 위한 경영시스템을 갖추고, 이를 유효하게 운영하기 위한 요구사항을 규정한 국제 표준규격입니다. ISO 9001은 모든 산업 분야 및 활동에 적용할 수 있습니다."
    const iso9001 = "<ISO 9001 인증 기대효과>"
    const iso9001b = ["▸ 대내외적인 기업 이미지 구축 및 신뢰성 향상",
        "▸ 경영시스템 체계확립으로 품질향상/원가절감/생산성 향상",
        "▸ 정부구매시 인증획득 제품의 지명경쟁 입찰 및 수의계약 가능",
        "▸ 병역 지정업체 추천기준",
        "▸ 기술신용보증기금 기술우대 가산점 부여",
        "▸ 건설기술관리법에 따른 가산점 부여",
        "▸ 조세특례제한법에 따른 기술비 세액공제",
        "▸ 창업진흥원 패키지 사업 가점혜택",
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
                {iso9001}
                <br/>
                <br/>
                {
                    iso9001b.map((item,idx)=>{
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

export const ISO14001=()=>{
    const title="ISO 14001 : 환경경영시스템"
    const content ="ISO 14001은 국제표준화기구에서 제정한 규격으로 조직의 모든 활동이나 제품, 서비스와 관련된 환경영향들을 관리하기 위한 요구 사항을 규정한 국제 표준규격입니다. ISO 14001은 ISO 9001과 마찬가지로 제조업, 서비스업, 도소매업 등 전반적인 산업 분야에 적용이 가능하며, 국내 외의 환경 법규를 준수하면서 환경방침을 체계적으로 실행할 수 있습니다. "
    const iso14001 = "<ISO 14001 인증 기대효과>"
    const iso14001b = ["▸ 환경친화적 기업으로 이미지 개선",
        "▸ 원자재, 에너지 및 폐기물 처리비용의 절감",
        "▸ 환경경영을 통한 생산제품 경쟁력 강화",
        "▸ 해외시장 진출 시 바이어 요구 충족",
        "▸ 친환경 건축물 입증 시 가점 부여",
        "▸ 메인비즈/이노비즈/벤처기업 등 인증평가 가점",
        "▸ 수출유망 중소기업 선정 가점",
        "▸ 창업진흥원 패키지 사업 가점혜택"
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
                {iso14001}
                <br/>
                <br/>
                {
                    iso14001b.map((item,idx)=>{
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

export const ISO13485=()=>{
    const title="ISO 13485 : 의료기기 품질경영시스템"
    const content ="ISO 13485는 국제표준화기구에서 제정한 규격으로 의료기기에 대한 설계, 개발, 생산, 설치, 부가서비스를 제공하는 조직의 시스템에 대한 요구사항을 규정한 국제 표준 규격입니다. IDO 13485는 ISO 9001 품질경영시스템을 기반으로 의료기기에 대해 특별히 적용되는 요구사항을 추가한 규격으로 원재료에서 완제품까지의 제조관리부터 후처리까지의 과정 관리, 내부심사, 문서화 관리로 구성되어 있습니다. ISO 13485는 의료기기와 의료기기 관련 서비스 제공 조직에 적용이 가능합니다. 즉, 의료기기의 설계, 개발, 설치 관련 기업 뿐 아니라 의료기기 멸균, 교정, 판매 등의 서비스를 제공하는 조직에도 모두 적용이 가능합니다.";
    const iso13485 = "<ISO 13485 인증 기대효과>"
    const iso13485b = ["▸ 경영시스템 확립으로 전 과정의 효율적인 관리 가능",
        "▸ 지속적인 품질 개선으로 제품 안전성 증대",
        "▸ CE mark 인증 용이",
        "▸ 해외 진출 시 무역 장벽 해소", 
        "▸ 과잉생산 및 재고 등 생산비용 절약",
        "▸ 정부 및 민간 입찰 시 유리",
        "▸ 창업진흥원 패키지 사업 가점혜택"
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
                {iso13485}
                <br/>
                <br/>
                {
                    iso13485b.map((item,idx)=>{
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

export const ISO22000=()=>{
    const title="ISO 22000 : 식품안전경영시스템"
    const content ="ISO 22000은 국제표준화기구에서 제정한 규격으로 식품공급사슬의 모든 조직에서 각 단계별 발생할 수 있는 위해요소를 관리하기 위한 요구사항을 규정한 국제 표준 규격입니다. ISO 22000은 ISO 9001 품질경영시스템과 HACCP의 주요내용이 혼합∙보안되어 있습니다. ISO 22000은 장비 생산, 재료 포장, 세제, 첨가제 및 원료를 포함한 식품 공급 사슬 내 모든 식품 관련 기업에서 적용할 수 있습니다. 기업의 규모 및 복잡성에 상관없이 식품사슬에 있는 모든 조직에 직접적 또는 간접적으로 적용 가능합니다."
    const iso22000 = "<ISO 22000 인증 기대효과>"
    const iso22000b = ["▸ 기업 이미지 및 신뢰도 재고",
        "▸ 시스템화된 식품 안전 관리 구현으로 식품 안전성 문제 사전예방",
        "▸ 소비자불만, 반품 및 폐기량 감소로 경제적 이익 도모",
        "▸ 국제적 통용성 제고 및 비용 절감",
        "▸ HACCP 및 기타 기존 식품안전 프로그램 전환/확장 용이",
        "▸ 식품안전에 대한 고객의 신뢰 향상",
        "▸ 창업진흥원 패키지 사업 가점혜택"
        
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
                {iso22000}
                <br/>
                <br/>
                {
                    iso22000b.map((item,idx)=>{
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

export const FSSC22000=()=>{
    const title="FSSC 22000 : 식품안전시스템"
    const content ="FSSC 22000은 식품제조회사에 가장 영향력 있는 GFSI(국제식품안전기구)에서 식품 산업 전반에 적합한 식품안전인증제도 도입을 위해 승인한 식품안전 국제 표준 규격입니다. FSSC 22000은 규모와 위치에 관계없이 모든 식품 제조기업과 수송 및 생산현장의 보관 관련 기업에 적용할 수 있습니다. FSSC 22000은 ISO 22000 식품안전경영시스템을 기반으로 식품 및 성분의 공급자에 대한 선행요건 프로그램과 추가적인 요구사항을 조합해 구성되어 있습니다. 가장 큰 차이점으로는 FSSC 2000은 ISO 22000 요구사항 중 추가적으로 식품방어를 위한 프로세스와 식품사기 방지를 위한 프로세스, 환경관리기준을 추가하고 있습니다. 따라서 ISO 22000기반 인증이기에, ISO 22000 획득기업에서는 FSSC 22000 준비가 어렵지 안습니다."
    const fssc22000 = "<FSSC 22000 인증 기대효과>"
    const fssc22000b = ["▸ 대내외적인 기업 이미지 구축 및 신뢰성 향상",
        "▸ 경영시스템 체계확립으로 품질향상/원가절감/생산성 향상",
        "▸ 정부구매시 인증획득 제품의 지명경쟁 입찰 및 수의계약 가능",
        "▸ 병역 지정업체 추천기준",
        "▸ 기술신용보증기금 기술우대 가산점 부여",
        "▸ 건설기술관리법에 따른 가산점 부여",
        "▸ 조세특례제한법에 따른 기술비 세액공제",
        "▸ 창업진흥원 패키지 사업 가점혜택"
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
                {fssc22000}
                <br/>
                <br/>
                {
                    fssc22000b.map((item,idx)=>{
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

export const ISO22716=()=>{
    const title="ISO 22716 : 화장품 GMP"
    const content ="ISO 22716은 화장품 제조 및 품질관리 기준 GMP(우수제조관리기준)에 대한 가이드라인으로 화장품의 품질에 영향을 미치는 요인들과 제품 생산 및 유통과정을 효과적으로 관리하기 위한 국제 표준 규격입니다. ISO 22716은 각국마다 다른 GMP의 규제 차이를 해소하기 위한 대안으로 제정되었습니다. ISO 22716은 연구개발 활동과 완제품의 유통을 제외한 제품의 생산, 관리, 보관, 출하 등 제품의 품질과 관련된 공정에서의 모든 기업과 화장품 제조사에 적용할 수 있습니다."
    const iso22716 = "<ISO 22716 인증 기대효과>"
    const iso22716b = ["▸ GMP 요구사항 및 품질 기준 충족",
        "▸ 공정의 안전성 보증 및 오류 위험 최소화",
        "▸ 브랜드 보호 및 신뢰성 구축",
        "▸ 수출경쟁력 확보 및 해외진출 용이성",
        "▸ 부적합 의심상품의 리콜과 법적 규제 조치 위험성 감소",
        "▸ 창업진흥원 패키지 사업 가점혜택"
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
                {iso22716}
                <br/>
                <br/>
                {
                    iso22716b.map((item,idx)=>{
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

export const ISO45001=()=>{
    const title="ISO 45001 : 안전보건경영시스템 "
    const content ="ISO 45001은 국제표준화기구에서 제정한 규격으로 작업자 안전을 위한 실용적인 솔루션을 제공하는 산업 보건 및 안전 관리 경영시스템으로 규정한 국제 표준규격입니다. 모든 산업 현장에서의 사고로 인한 손실 방지를 목적으로 하고 있습니다. 따라서 모든 산업 분야에서 조직의 규모와 지리적 위치에 관계없이 적용 가능합니다. ISO 45001 인증을 받으면, 유사 구조를 가진 ISO 9001 품질경영시스템, ISO 14001 환경경영시스템과의 통합 시스템 구축이 용이합니다. ISO의 대표 인증 3가지를 통해 품질, 환경, 안전보건의 완벽한 경영 체제를 구축하고 체계적인 경영 프로세스가 있는 신임 있는 기업으로 거듭날 수 있습니다."
    const iso45001 = "<ISO 45001 인증 기대효과>"
    const iso45001b = ["▸ 안전보건 문화 조성 및 기업 이미지 개선",
        "▸ 안전보건에 대한 자율적인 관리체제로의 전환 가능",
        "▸ 수출비용 절감 및 해외 진출 용이",
        "▸ 근로환경 위험성 관리 및 개선",
        "▸ 사고 위험 식별 용이 및 사고 발생률 감소",
        "▸ 안전사고 처리 비용 감소",
        "▸ 창업진흥원 패키지 사업 가점혜택"
        
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
                {iso45001}
                <br/>
                <br/>
                {
                    iso45001b.map((item,idx)=>{
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

