import type { NextPage } from 'next'
import styled from 'styled-components'
import { md, palette, sm } from '../styles/styles'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <section className="first">
        <div className="first-wrapper">
          <img src="/static/connect_bottom_logo.png" alt="bottom_logo" className="logo" />
          <img src="/static/main_mockup.png" alt="main_mockup" className="mockup" />
          <div className="content">
            <h1>스태비 커넥트</h1>
            <h2>나만의 팀을 꾸려보세요!</h2>
          </div>
        </div>
        <div className="second-wrapper">
          <div className="typography-content">
            <span className="accent">연기자</span>
            <span>모델</span>
            <span>뮤지션</span>
            <span className="accent">크리에이터</span>
            <span>각본</span>
            <span>각색</span>
            <span>연출</span>
            <span>스크립터</span>
            <span>조감독</span>
            <span>투자총괄</span>
            <span>프로듀서</span>
            <span>제작</span>
            <span className="accent">제작지원</span>
            <span>투자</span>
            <span>촬영</span>
            <span>조명그립</span>
            <span>스테디캠</span>
            <span>모션컨트롤</span>
            <span>믹싱</span>
            <span className="accent">현자동시녹음</span>
            <span>음악</span>
            <span>미술세트</span>
            <span>소품</span>
            <span className="accent">미술지원</span>
            <span>미술팀장</span>
            <span className="accent">특수분장</span>
            <span>특수효과</span>
            <span>시각효과</span>
            <span>액션배우</span>
            <span>의상</span>
          </div>
          <div className="dots">
            <div className="dot" style={{ backgroundColor: palette.basicAccent1 }}></div>
            <div className="dot" style={{ backgroundColor: palette.basicAccent2 }}></div>
            <div className="dot" style={{ backgroundColor: palette.basicAccent4 }}></div>
          </div>
        </div>
        <div className="three-wrapper">
          <div>
            <h1>what is connect</h1>
            <div className="sub-title">
              <p>
                <b>스태비 커넥트</b>는 미디어를
              </p>
              <p>
                기반으로 한, <b className="accent">팀 빌드업 어플</b>입니다.
              </p>
            </div>
            <div className="paragraphy">
              <p>사진과 영상으로 나의 재능을 알리고</p>
              <p>
                마음에 드는 <b>멤버</b>를 찾고 연결해 보세요!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="first-wrapper">
          <span>how to use?</span>
          <p>스태비커넥트가 처음이시죠? 이용방법을 알려드릴게요:)</p>
        </div>
        <div className="second-wrapper">
          <h1 className="order">01</h1>
          <div className="description">
            이메일 <span className="red">회원가입</span>을 먼저 완료해주세요!
          </div>
          <div className="img-content">
            <img src="/static/signup.png" alt="signup" />
          </div>
          <p className="text">어떤 것에 관심을 가지고 있나요?</p>
          <span className="title">
            <span>관심카테고리</span> 3개를 선택해주세요
          </span>
          <div className="category-img-content">
            <img
              className="category-mockup"
              src="/static/category_mockup.png"
              alt="category_mockup"
            />
            <img className="category-tag actor" src="/static/actor.png" alt="actor" />
            <img className="category-tag creator" src="/static/creator.png" alt="creator" />
            <img
              className="category-tag production"
              src="/static/production.png"
              alt="production"
            />
            <img className="category-tag art" src="/static/art.png" alt="art" />
            <img className="category-tag music" src="/static/music.png" alt="music" />
            <img
              className="category-tag vieweffect"
              src="/static/vieweffect.png"
              alt="vieweffect"
            />
          </div>
          <div className="mobile-category-tag">
            <div className="active">연기자</div>
            <div>미술</div>
            <div>메이크업</div>
          </div>
          <div className="arrow">
            <img src="/static/bottom-arrow.svg" alt="bottomArrow" />
          </div>
          <div className="content-box">
            <p>회원가입을 완료하셨다면</p>
            <p>
              팀원을 <b className="red">팔로우</b>해주세요
            </p>
            <p>
              팔로우 방법은 <span style={{ color: '#3700B9' }}>아래</span>를 참고해주세요.
            </p>
          </div>
        </div>
      </section>
      <section className="thirdy">
        <div className="wrapper">
          <div className="title">
            <text>1</text>
          </div>
          <div className="description">
            <p>팀원이 관심사로 설정한</p>
            <span className="underline">
              <b>카테고리</b>를 선택해주세요
            </span>
          </div>
          <div className="img">
            <img src="/static/home-article.png" alt="home-article" />
          </div>
        </div>
        <div className="wrapper">
          <div className="title">
            <text>2</text>
          </div>
        </div>
        <div className="wrapper">
          <div className="title">
            <text>3</text>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  .first {
    .first-wrapper {
      position: relative;
      background: url('/static/main_background.png') no-repeat top/cover;

      min-height: 100vh;

      ${md} {
        min-height: 15.875rem;
      }
      .content {
        padding-top: 19.9375rem;
        margin-left: 9.125rem;

        ${md} {
          padding-top: 2.25rem;
          margin: 0;
          text-align: center;
        }
        h1,
        h2 {
          font-family: 'Nanum Gothic';
          color: #ffffff;
        }

        h1 {
          margin-bottom: 2.625rem;
          font-weight: 800;
          font-size: 6.25rem;

          ${md} {
            font-size: 1.25rem;
            margin: 0 auto 0.5rem;
          }
        }

        h2 {
          font-size: 4.375rem;
          font-weight: 800;

          ${md} {
            font-size: 1.5rem;
          }
        }
      }

      .logo {
        width: 100%;
        position: absolute;
        bottom: 0;

        object-fit: contain;

        ${md} {
          height: inherit;
        }
      }

      .mockup {
        position: absolute;
        right: 0;

        width: 42rem;
        max-height: 111.125rem;
        margin-right: 9.125rem;
        margin-top: 6.25rem;

        object-fit: contain;

        z-index: 5;

        ${md} {
          width: 11.6875rem;
          margin: 7.3125rem 0 0;
          right: 35%;
        }

        ${sm} {
          right: 25%;
        }
      }
    }

    .second-wrapper {
      position: relative;
      min-height: 57rem;

      ${md} {
        min-height: 23rem;
      }
      .typography-content {
        font-family: 'Noto Sans KR';
        font-weight: 500;
        font-size: 3.125rem;
        line-height: 5.625rem;

        ${md} {
          font-size: 0.75rem;
          line-height: 17.38px;
        }

        span:not(:last-child) {
          margin-right: 2.5rem;

          ${md} {
            margin-right: 8.29px;
          }
        }

        span {
          color: ${palette.gray};

          &.accent {
            color: ${palette.basicAccent2};
          }
        }
      }

      .dots {
        display: inline-flex;
        margin-left: 2.75rem;
        margin-top: 3.625rem;

        ${md} {
          margin: 0;

          position: absolute;
          right: 0.875rem;
        }

        .dot {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;

          &:not(:last-child) {
            margin-right: 4.0625rem;

            ${md} {
              margin-right: 1.4375rem;
            }
          }

          ${md} {
            width: 0.75rem;
            height: 0.75rem;
          }
        }
      }
    }

    .three-wrapper {
      position: relative;
      margin-left: 2.75rem;
      margin-top: 11.5625rem;

      ${md} {
        margin: 0;
        text-align: center;
      }
      h1 {
        font-family: 'Roboto';
        text-transform: uppercase;
        font-weight: 900;
        font-size: 3.75rem;

        ${md} {
          display: none;
        }
      }

      p {
        font-family: 'Noto Sans KR';
        color: ${palette.deepGray};
      }

      b {
        color: #000000;

        &.accent {
          color: #3700b9;
        }
      }

      > div:first-child {
        margin-left: 4.5625rem;

        ${md} {
          margin: 0;
        }
      }

      .sub-title {
        margin-top: 7.5rem;
        line-height: 4.375rem;
        font-size: 2.5rem;

        ${md} {
          margin-top: 0.75rem;
          font-size: 1.25rem;
          line-height: 2.125rem;
        }
      }

      .paragraphy {
        margin-top: 3.375rem;
        line-height: 3.625rem;
        font-size: 2rem;

        ${md} {
          margin-top: 1.875rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }

      &:before {
        position: absolute;
        content: '';
        width: 1.75rem;
        height: 100%;
        background-color: ${palette.basicAccent1};

        ${md} {
          display: none;
        }
      }
    }
  }

  .second {
    margin-top: 22.8125rem;
    position: relative;

    ${md} {
      margin-top: 8.6875rem;
    }

    .first-wrapper {
      text-align: center;
      span {
        text-transform: uppercase;
        line-height: 4.375rem;
        font-size: 3.75rem;
        font-weight: 900;
        letter-spacing: 0.32rem;

        position: relative;

        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          width: 93%;
          height: 2.125rem;
          background-color: ${palette.basicAccent2};
          z-index: -1;

          ${md} {
            width: 100%;
            height: 0.9375rem;
            background-color: ${palette.basicAccent4};
          }
        }

        ${md} {
          font-size: 1.25rem;
          line-height: 1.4375rem;
        }
      }

      p {
        margin-top: 2.6875rem;
        font-family: 'Noto Sans KR';
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 3.625rem;

        color: ${palette.deepGray};

        ${md} {
          font-size: 1rem;
          line-height: 1.875rem;
          max-width: 11.875rem;
          margin: 1.75rem auto 0;
        }
      }
    }

    .second-wrapper {
      margin-top: 21.25rem;
      text-align: center;

      ${md} {
        margin-top: 7.125rem;
      }

      .order {
        font-size: 3.125rem;
        font-weight: 900;
        line-height: 3.6875rem;

        ${md} {
          font-size: 1rem;
          line-height: 1.1875rem;
        }
      }

      .description {
        margin-top: 3.375rem;
        font-size: 3.125rem;
        font-weight: 500;

        ${md} {
          margin-top: 1.5625rem;
          font-size: 1.25rem;
          line-height: 1.8125rem;
        }
        .red {
          color: ${palette.red};
        }
      }

      .img-content {
        position: relative;

        margin-top: 8.1875rem;

        ${md} {
          margin-top: 3.0625rem;
        }
        img {
          max-width: 67.875rem;

          ${md} {
            max-width: 88%;
          }
        }
      }

      .text {
        margin-top: 17.375rem;
        font-weight: 500;
        font-size: 1.875rem;
        line-height: 2.6875rem;

        ${md} {
          margin-top: 4.875rem;
          font-size: 1rem;
          line-height: 1.4375rem;
        }
      }

      .title {
        font-family: 'Noto Sans KR';
        font-weight: bold;
        font-size: 3.125rem;
        line-height: 4.5rem;

        ${md} {
          font-size: 1.25rem;
          line-height: 1.8125rem;
        }

        > span {
          position: relative;

          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -10px;
            width: 105%;
            height: 2.125rem;
            background-color: ${palette.basicAccent4};
            z-index: -1;

            ${md} {
              height: 0.625rem;
              left: -2px;
            }
          }
        }
      }

      .category-img-content {
        position: relative;
        margin-top: 5rem;

        ${md} {
          margin-top: 2.5rem;
        }
        .category-mockup {
          max-width: 41.25rem;

          ${md} {
            max-width: 70%;
          }
        }

        .category-tag {
          position: absolute;
          z-index: -1;

          ${md} {
            display: none;
          }

          &.actor,
          &.creator {
            max-width: 16.625rem;
          }

          &.actor {
            top: 4rem;
            right: 15%;
          }

          &.creator {
            top: 17rem;
            right: 7%;
          }

          &.production {
            max-width: 12.625rem;
            top: 30rem;
            right: 15%;
          }

          &.art {
            max-width: 14.5rem;
            top: 32rem;
            left: 15%;
          }

          &.music {
            max-width: 11.6875rem;
            top: 42rem;
            left: 7%;
          }

          &.vieweffect {
            max-width: 16.375rem;
            top: 53rem;
            left: 15%;
          }
        }
      }

      .mobile-category-tag {
        display: none;

        ${md} {
          margin-top: 3.3125rem;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;

          > div {
            padding: 0 1rem;
            border-radius: 1rem;
            color: ${palette.gray};
            border: 1px solid ${palette.gray};
            &.active {
              color: ${palette.basicAccent1};
              border: 1px solid ${palette.basicAccent1};
            }
          }
        }
      }
      .arrow {
        margin-top: 6.125rem;
        ${md} {
          margin-top: 2.125rem;

          img {
            width: 2.0625rem;
            height: 2.0625rem;
          }
        }
      }
      .content-box {
        margin: 4.875rem auto 8.8125rem;
        font-family: 'Noto Sans KR';

        background-color: #ffffff;
        border-radius: 1.25rem;

        max-width: 40.75rem;
        padding: 1.5625rem 3.875rem;

        ${md} {
          max-width: 15.75rem;
          margin: 1.4375rem auto 5rem;
          padding: 1.375rem;
        }

        .red {
          color: ${palette.red};
        }

        > p:not(:last-child) {
          font-size: 3.125rem;
          font-weight: bold;
          line-height: 5rem;

          ${md} {
            font-size: 1.125rem;
            line-height: 2rem;
          }
        }

        > p:last-child {
          margin-top: 2.0625rem;
          font-size: 1.875rem;
          line-height: 2.6875rem;
          color: ${palette.deepGray};

          ${md} {
            margin-top: 0.6875rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }
      }
    }
  }

  .thirdy {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    min-height: 24.5rem;

    background-color: #ffffff;

    gap: 2px;

    ${md} {
      grid-template-columns: 1fr;
    }
    .wrapper {
      background-color: ${palette.deepBackground};
      font-family: 'Noto Sans KR';

      .title {
        display: flex;
        justify-content: center;

        margin-top: 8.4375rem;

        font-size: 1.75rem;
        font-weight: 900;
        line-height: 3.625rem;

        color: #ffffff;

        text {
          padding: 0.1875rem 1.4375rem;

          background-color: ${palette.basicAccent1};
          border-radius: 50%;
        }
      }

      .description {
        font-size: 1.875rem;
        line-height: 3.25rem;
        text-align: center;

        .underline {
          position: relative;
          z-index: 0;

          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 0.625rem;
            background-color: ${palette.basicAccent4};
            z-index: -1;

            ${md} {
              height: 0.9375rem;
            }
          }
        }
      }

      .img {
        position: relative;
        img {
          bottom: 0;
          max-width: 100%;
        }
      }
    }
  }
`

export default Home
