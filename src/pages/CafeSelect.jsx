import { useState } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/CafeSelect.css';

function CafeSelect() {
    
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null); // 선택된 카페 상태 (전체 객체 저장)

    // 카페 로고 클릭 핸들러
    const handleSelect = (cafe) => {
        // 이미 선택된 카페를 클릭했는지 확인
        if (selected && selected.id === cafe.id) {
            setSelected(null); // 이미 선택된 카페를 클릭하면 선택 해제
        } else {
            setSelected(cafe); // 새로운 카페 객체를 선택
        }
    };

    // 카페 정보 (실제 사용 시 서버에서 데이터를 받거나 별도 파일로 관리할 수 있음)
    const cafes = [
        { id: 1, logo: 'starbucks.png', name: '스타벅스' },
        { id: 2, logo: 'hollys.png', name: '할리스' },
        { id: 3, logo: 'twosome.png', name: '투썸플레이스' },
        { id: 4, logo: 'gongcha.png', name: '공차' },
        { id: 5, logo: 'ediya.png', name: '이디야' },
        { id: 6, logo: 'tomntoms.png', name: '탐앤탐스' },
        { id: 7, logo: 'megacoffee.png', name: '메가커피' },
        { id: 8, logo: 'paikscoffee.png', name: '빽다방' },
        { id: 9, logo: 'compose.png', name: '컴포즈커피' },
        { id: 10, logo: 'theventi.png', name: '더벤티' },
        { id: 11, logo: 'coffeebean.png', name: '커피빈' },
        { id: 12, logo: 'pascucci.png', name: '파스쿠찌' }
    ];

    return (
    <div className="body-wrapper">
        <h1 className="title"><strong>카페 선택</strong></h1>
        <Container className="text-center">
            <h2><strong>원하시는 카페 1개를 선택해주세요.</strong></h2>
            <div className="logo-grid">
                {cafes.map(cafe => (
                    <div key={cafe.id} className={`logo-wrapper ${selected && selected.id === cafe.id ? 'selected' : ''}`}
                         onClick={() => handleSelect(cafe)}>
                        <Image src={cafe.logo} roundedCircle className="cafe-logo" />
                        <div className="cafe-name">{cafe.name}</div> {/* 카페 이름 추가 */}
                    </div>
                ))}
            </div>
            <Button
            className="my-5"
            style={{
                backgroundColor: selected ? '#FFEE56' : '#BDBDBD',
                borderColor: selected ? '#FFEE56' : '#BDBDBD',
                color: '#000'
            }}
            disabled={!selected}
                onClick={() => navigate('/menulist', { state: { cafeName: selected ? selected.name : '' }})}>
                선택 완료
            </Button>
        </Container>
    </div>
    );
}

export default CafeSelect;
