import type { NextPage } from 'next'
import styled from 'styled-components'
import { md, palette, sm, xxs } from '../styles/styles'

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
          <div className="description">
            <span className="underline">
              팀원의 <b>닉네임</b>을 검색해주세요
            </span>
            <p className="gray">
              혹은 <b>멤버</b>를 선택해서 팀원을 찾을 수 있어요
            </p>
          </div>
          <div className="img">
            <img src="/static/home-search.png" alt="home-search" />
          </div>
        </div>
        <div className="wrapper">
          <div className="title">
            <text>3</text>
          </div>
          <div className="description">
            <p>팀원의 프로필을 터치 후,</p>
            <span className="underline">
              개인페이지에서 <b>팔로우</b>를 선택해주세요.
            </span>
          </div>
          <div className="img">
            <img src="/static/page-follow.png" alt="page-follow" />
          </div>
        </div>
      </section>
      <section className="four">
        <div className="wrapper">
          <div className="mockup">
            <img src="/static/submit-mockup.png" alt="submit-mockup" />
          </div>
          <div className="content">
            <h1 className="weight-900">02</h1>
            <h1 className="weight-700">홈 - 등록하기를 눌러주세요!</h1>
            <div className="description">
              <p>회원가입과 팔로우를 완료하셨으면</p>
              <p>이제 공고를 등록해 볼까요?</p>
            </div>
            <div className="add-post">
              <img className="add-post-img" src="/static/ic-add-post.png" alt="ic-add-post" />
              <img
                className="submit-mockup-img"
                src="/static/submit-mockup.png"
                alt="submit-mockup-2"
              />
            </div>
            <div className="arrow">
              <img src="/static/bottom-arrow.svg" alt="bottom-arrow" />
            </div>
            <div className="content-box">
              <div className="content">
                <span>피드 등록</span>
                <p>나를 알리는 글을 등록해주세요</p>
              </div>
              <div className="content">
                <span className="badge">포스트 등록</span>
                <p>팀원을 찾는 글을 등록해주세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="wrapper">
          <div className="content">
            <h1 className="weight-900">03</h1>
            <h1 className="weight-700">천천히 스크롤하면서 공백을 채워보세요!</h1>
            <div className="description">
              <p>잘못 입력했다면, 수정도 가능해요:)</p>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <div className="content">
            <div className="img-1">
              <img src="/static/submit-post-1.png" alt="submit-post-1" />
            </div>
            <div className="img-2">
              <img src="/static/submit-post-2.png" alt="submit-post-2" />
            </div>
            <div className="img-3">
              <img src="/static/submit-post-3.png" alt="submit-post-3" />
            </div>
          </div>
          <div className="mobile-content">
            <div className="img">
              <img src="/static/submit-post-mobile.png" alt="submit-post-mobile" />
            </div>
          </div>
          <div className="gradient"></div>
        </div>
      </section>
      <section className="six">
        <div className="wrapper">
          <h1>포스트 등록시, 알아두셔야 할 것이 있어요!</h1>
          <div className="content">
            <img className="ic-warning" src="/static/warning.svg" alt="warning" />
            <div className="box">
              <span className="red">팔로우</span>하지 않은 멤버는 참여멤버로 초대가 불가능해요
              <br />
              먼저 팀멤버를 찾아서 팔로우 해보세요!
            </div>
            <div className="box">
              팀멤버를 <span className="red">&lsquo;참여멤버&rsquo;</span>로 초대하지 않았을 경우,
              <br />
              팀멤버가 직접 포스트에 지원해야해요.
            </div>
          </div>
        </div>
      </section>
      <section className="seven">
        <div className="wrapper">
          <div className="content">
            <h1 className="weight-900">04</h1>
            <h1 className="weight-700">잘 등록되었는지 확인해볼까요?</h1>
            <div className="description">
              <p>
                하단메뉴 - <span>나의 활동</span>에서 확인해보세요!
              </p>
            </div>
            <div className="tab-history-circle">
              <img src="/static/ic-tab-history-on.svg" alt="ic-tab-history-on" />
              <span>나의활동</span>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img src="/static/task-mockup.png" alt="task-mockup" />
        </div>
      </section>
      <section className="eight">
        <div className="wrapper">
          <div className="content">
            <div className="title">
              <div className="group">
                <div className="circle"></div>
                <img src="/static/ic-tab-chat-off-1.svg" alt="ic-tab-chat-off-1" />
              </div>
              <span>COMMUNICATION</span>
            </div>
            <div className="description">
              <p>진행상황을 공유하고 싶을때,</p>
              <p>언제 어디서든 커넥트로 바로 채팅해보세요!</p>
            </div>
          </div>
          <div className="img-content">
            <div className="circle-background"></div>
            <img className="chat-mockup" src="/static/chat-mockup.png" alt="chat-mockup" />
            <img className="right-arrow-1" src="/static/right-arrow.svg" alt="right-arrow-1" />
            <img className="right-arrow-2" src="/static/right-arrow.svg" alt="right-arrow-2" />
            <div className="chat-group-content">
              <img src="/static/chat-group.png" alt="chat-group" />
              <p>메뉴를 터치해서 공모전 담당자를 초대해보세요!</p>
              <p>
                채팅초대는 <span>포스트 담당자</span>만 가능해요!
              </p>
            </div>
            <div className="gallery-image-content">
              <img src="/static/gallery-image.png" alt="gallery-image" />
              <p>사진과 영상도 편하게 보낼 수 있어요</p>
            </div>
          </div>
        </div>
      </section>
      <section className="nine">
        <div className="wrapper">
          <h1 className="title">~SPECIAL EVENT~</h1>
          <div className="description">
            <p>공모전 관련 피드를 올리신 분 10분을 추첨해서</p>
            <p>올리브영 2만원권 상품권을 드려요!</p>
          </div>
          <div className="coupon-content">
            <img src="/static/coupongroup.png" alt="coupongroup" />
          </div>
          <h2 className="date">11.15 ~ 12.30</h2>
          <div className="box">
            <div>
              <span>참가조건</span>
              <span>한국 예술 종합학교 커넥트 연계지원사업 공모전 참가자</span>
            </div>
            <div>
              <span>참여방법</span>
              <span>공모전 참여/진행과정이 담긴 피드 작성</span>
            </div>
          </div>
          <div className="announcement">결과발표: 1월 5일</div>
        </div>
      </section>
      <section className="ten">
        <div className="wrapper">
          <div className="title">
            <span>SHOW YOURSELF</span>
          </div>
          <div className="description">
            <p>마지막으로 나를 알리는 사진과 동영상을 올려볼까요?</p>
            <p>현재 진행상황, 관심있는 분야 등 피드에 자유롭게 올려보세요!</p>
          </div>
          <div className="content">
            <div className="img-content">
              <img src="/static/feed-mockup.png" alt="feed-mockup" />
            </div>
            <div className="text-content">
              <div className="box">
                <div>
                  <h3>피드 등록</h3>
                  <p>나를 알리는 글을 등록해주세요</p>
                </div>
                <div>
                  <h3>포스트 등록</h3>
                  <p>팀원을 찾는 글을 등록해주세요</p>
                </div>
              </div>
              <div className="group">
                <div>
                  <div className="circle">
                    <img src="/static/mypage.svg" alt="mypage" />
                  </div>
                  <span>마이페이지에서 내가 쓴 피드와 포스트를 모아볼 수 있어요</span>
                </div>
                <div>
                  <div className="circle">
                    <img src="/static/story.svg" alt="story" />
                  </div>
                  <span>스토리에서 내가 스크랩한 피드를 확인할 수 있어요</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="eleven">
        <div className="wrapper">
          <div className="box">
            <img className="question" src="/static/question.svg" alt="question" />
            <h1 className="title">또 궁금한 점이 있으신가요?</h1>
            <div className="description">
              <p>
                <img src="/static/kakao-ch-logo.svg" alt="kakao-ch-logo" />
                <span>카카오톡채널</span>에서&nbsp;<b>스태비커넥트</b>를&nbsp;추가하고
              </p>
              <p>문의사항을 남겨주시면 답변해드려요!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="twelve">
        <div className="wrapper">
          <h1 className="title">스태비 커넥트</h1>
          <div className="description">
            <p>생각보다 어렵지 않죠?</p>
            <p>지금 바로 다운받아보세요!</p>
          </div>
          <div className="btn-group">
            <a href="#">
              <img src="/static/google-play.png" alt="google-play" />
            </a>
            <a href="#">
              <img src="/static/app-store.png" alt="app-store" />
            </a>
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
          font-family: 'Noto Sans KR';
          color: #ffffff;
        }

        h1 {
          margin-bottom: 2.625rem;
          font-weight: bold;
          font-size: 6.875rem;

          ${md} {
            font-size: 1.25rem;
            margin: 0 auto 0.5rem;
          }
        }

        h2 {
          font-size: 4.375rem;
          font-weight: bold;

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

    min-height: 20.5rem;

    background-color: #ffffff;

    gap: 2px;

    ${md} {
      grid-template-columns: 1fr;
    }
    .wrapper {
      background-color: ${palette.deepBackground};
      font-family: 'Noto Sans KR';

      min-height: 68.1875rem;
      position: relative;

      ${md} {
        min-height: 32.5625rem;
      }

      .title {
        display: flex;
        justify-content: center;

        margin-top: 8.4375rem;

        font-size: 1.75rem;
        font-weight: 900;
        line-height: 3.625rem;

        color: #ffffff;

        ${md} {
          margin-top: 1.6875rem;
          font-size: 0.75rem;
          line-height: 0.75rem;
        }

        text {
          padding: 0.1875rem 1.4375rem;

          background-color: ${palette.basicAccent1};
          border-radius: 50%;

          ${md} {
            padding: 0.25rem 0.375rem;
          }
        }
      }

      .description {
        font-size: 1.875rem;
        line-height: 3.25rem;
        text-align: center;

        margin: 2.6875rem 0 11.125rem;

        ${md} {
          font-size: 1rem;
          line-height: 1.75rem;
          margin: 1.25rem 0 2.25rem;
        }

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
              height: 0.375rem;
            }
          }
        }

        .gray {
          margin-top: 0.6875rem;
          font-size: 1.5rem;
          line-height: 2.1875rem;
          color: #484a54;

          ${md} {
            margin-top: 0.375rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }
      }

      .img {
        ${md} {
          text-align: center;
        }

        img {
          max-width: 100%;
          position: absolute;
          bottom: 0;

          ${md} {
            position: relative;
            bottom: -25px;
          }
        }
      }

      &:last-child {
        .img {
          img {
            ${md} {
              bottom: -10px;
            }
          }
        }
      }
    }
  }

  .four {
    .wrapper {
      padding: 15.875rem 13rem 12.5rem 22.6875rem;
      display: grid;
      grid-template-columns: 1fr 1fr;

      ${md} {
        margin: 3.125rem 0 4.5rem;
        padding: 0;
        text-align: center;

        grid-template-columns: 1fr;
      }

      .mockup {
        ${md} {
          display: none;
        }
        img {
          max-width: 100%;
        }
      }

      .content {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: center;

        h1 {
          font-size: 3.125rem;

          ${md} {
            font-size: 1rem;
          }
          &.weight-900 {
            font-weight: 900;
            line-height: 3.6875rem;

            ${md} {
              line-height: 1.1875rem;
            }
          }
          &.weight-700 {
            margin-top: 2.0625rem;
            font-weight: 700;
            line-height: 4.5625rem;

            ${md} {
              line-height: 1.1875rem;
            }
          }
        }

        .description {
          margin-top: 2rem;
          font-family: 'Noto Sans KR';
          font-size: 1.875rem;
          font-weight: 500;
          line-height: 3.125rem;
          color: ${palette.deepGray};
          text-align: center;

          ${md} {
            margin-top: 1.125rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }

        .add-post {
          margin-top: 9rem;
          text-align: center;

          ${md} {
            margin-top: 0.9375rem;
          }

          img.add-post-img {
            max-width: 60%;

            ${md} {
              display: none;
            }
          }

          img.submit-mockup-img {
            display: none;

            ${md} {
              display: inline-block;

              max-width: 77%;
            }
          }
        }

        .arrow {
          ${md} {
            margin: 0.625rem 0 1.75rem;
            img {
              width: 1.375rem;
              height: 1.375rem;
            }
          }
        }

        .content-box {
          margin-top: 3rem;
          padding: 3.125rem 9.375rem;
          background-color: #ffffff;

          display: flex;
          flex-flow: column nowrap;
          gap: 5.625rem;

          filter: drop-shadow(0px 0px 40px #c6bde9);
          border-radius: 25px;

          ${md} {
            margin-top: 0;
            padding: 1.25rem 4rem;
            gap: 2.4rem;
          }

          .content {
            span {
              font-size: 1.375rem;
              font-weight: 500;

              ${md} {
                font-size: 1rem;
              }

              &.badge {
                position: relative;
                &:before {
                  content: '';
                  position: absolute;
                  top: -5px;
                  left: -30px;
                  width: 1.0625rem;
                  height: 1.0625rem;

                  background: #ff004e;
                  box-shadow: 0px 0px 12px #ff004e;
                  border-radius: 50%;

                  ${md} {
                    top: -2px;
                    left: -15px;
                    width: 0.625rem;
                    height: 0.625rem;
                  }
                }
              }
            }
            p {
              margin-top: 0.375rem;
              font-size: 1rem;

              ${md} {
                font-size: 0.75rem;
              }
            }
          }
        }
      }
    }
  }

  .five {
    background-color: ${palette.deepBackground};

    .wrapper {
      text-align: center;
      .content {
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: center;

        margin: 2.8125rem 0 0.375rem;
        h1 {
          font-size: 3.125rem;

          ${md} {
            font-size: 1rem;
          }
          &.weight-900 {
            font-weight: 900;
            line-height: 3.6875rem;

            ${md} {
              line-height: 1.1875rem;
            }
          }
          &.weight-700 {
            margin-top: 1.8125rem;
            font-weight: 700;
            line-height: 4.5625rem;

            ${md} {
              margin-top: 1.125rem;
              line-height: 1.1875rem;
            }
          }
        }

        .description {
          margin-top: 1.125rem;
          font-family: 'Noto Sans KR';
          font-size: 1.875rem;
          font-weight: 500;
          line-height: 3.125rem;
          color: ${palette.deepGray};
          text-align: center;

          ${md} {
            margin-top: 0.6875rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }
      }
    }
    .img-wrapper {
      background: linear-gradient(0deg, rgba(154, 126, 255, 0.35) 0%, rgba(108, 83, 198, 0) 86.01%);

      min-height: 57.25rem;
      position: relative;

      ${md} {
        min-height: 30rem;
        margin-top: 2.5rem;
      }

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;

        gap: 3rem;

        position: absolute;
        bottom: 0;

        ${md} {
          display: none;
        }
        .img-1,
        .img-2,
        .img-3 {
          display: flex;
          justify-content: center;

          position: relative;
          img {
            max-width: 75%;
          }

          &:after {
            content: '';
            background: url('/static/scroll.svg') no-repeat center/contain;

            width: 6.25rem;
            height: 6.25rem;

            position: absolute;
            bottom: 1.6875rem;

            z-index: 1;
          }
        }
      }

      .mobile-content {
        display: none;

        ${md} {
          display: block;
          text-align: center;

          position: absolute;
          bottom: 0;

          .img {
            display: flex;
            justify-content: center;
            img {
              max-width: 32%;

              ${xxs} {
                max-width: 78%;
              }
            }

            &:after {
              content: '';
              background: url('/static/scroll.svg') no-repeat center/contain;

              width: 3.375rem;
              height: 3.375rem;

              position: absolute;
              bottom: 1.6875rem;

              z-index: 1;

              margin-right: 6rem;
            }
          }
        }
      }

      .gradient {
        position: absolute;
        bottom: 0;

        width: 100%;
        height: 13.5625rem;

        background: linear-gradient(0deg, #b3aad6 0%, rgba(213, 206, 238, 0) 86.01%);
      }
    }
  }

  .six {
    .wrapper {
      font-family: 'Noto Sans KR';
      margin: 18.75rem auto 18.75rem;

      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      ${md} {
        margin: 3.875rem auto 5rem;
      }

      h1 {
        font-size: 3.125rem;
        line-height: 4.5rem;

        ${md} {
          font-size: 1rem;
          line-height: 1.4375rem;
        }
      }

      .content {
        position: relative;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5.875rem;

        margin-top: 8rem;

        ${md} {
          grid-template-columns: 1fr;
          gap: 1rem;

          margin-top: 3.125rem;
          padding: 0 4.75rem;
        }

        .ic-warning {
          position: absolute;
          top: -100px;
          left: -100px;

          width: 10.3125rem;
          height: 10.3125rem;

          ${md} {
            top: -25px;
            left: 35px;
            width: 4.25rem;
            height: 4.25rem;
          }
        }
        .box {
          background: #ffffff;
          border: 14px solid #ffffff;
          box-sizing: border-box;
          box-shadow: 0px 0px 40px #c6bde9;
          border-radius: 36px;
          padding: 2.625rem 3.125rem;

          font-size: 1.875rem;
          line-height: 3.625rem;

          max-width: 29.75rem;

          ${md} {
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.75rem;
            max-width: 14.0625rem;
          }

          .red {
            color: ${palette.red};
            font-weight: 700;
          }
        }
      }
    }
  }

  .seven {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    background-color: ${palette.deepBackground};

    ${md} {
      grid-template-columns: 1fr;
    }

    .wrapper {
      text-align: center;
      padding: 12.25rem 0 13.4375rem;

      ${md} {
        padding: 2.0625rem 0 0;
      }

      .content {
        position: relative;
        h1 {
          font-size: 3.125rem;

          ${md} {
            font-size: 1rem;
          }
          &.weight-900 {
            font-weight: 900;
            line-height: 3.6875rem;

            ${md} {
              line-height: 1.1875rem;
            }
          }
          &.weight-700 {
            margin-top: 1.8125rem;
            font-weight: 700;
            line-height: 4.5625rem;

            ${md} {
              margin-top: 1.125rem;
              line-height: 1.1875rem;
            }
          }
        }

        .description {
          margin-top: 1.125rem;
          font-family: 'Noto Sans KR';
          font-size: 1.875rem;
          font-weight: 500;
          line-height: 3.125rem;
          color: ${palette.deepGray};
          text-align: center;

          ${md} {
            margin-top: 0.6875rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          span {
            color: ${palette.basicAccent};
          }
        }

        .tab-history-circle {
          font-family: 'Noto Sans KR';
          margin-top: 5.875rem;
          margin: 5.875rem auto 0;

          width: 14.5625rem;
          height: 14.5625rem;

          background-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 0px 40px #c6bde9;
          border-radius: 50%;

          display: inline-flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;

          z-index: 1;

          span {
            font-size: 2.25rem;
            color: #3700b9;
            margin-top: 1rem;
          }

          ${md} {
            position: absolute;
            top: 140px;
            left: -50px;
            width: 5.5rem;
            height: 5.5rem;

            margin: 0;

            img {
              max-width: 1.5rem;
              max-height: 1.5rem;
            }

            span {
              font-size: 0.875rem;
              margin-top: 0.25rem;
            }
          }
        }
      }
    }

    .img-wrapper {
      padding: 5.0625rem 0 0;

      position: relative;
      text-align: right;

      img {
        max-width: 100%;

        ${md} {
          max-width: 80%;
          position: relative;
          bottom: -5px;
        }
      }
    }
  }

  .eight {
    .wrapper {
      padding: 18.25rem 7rem;

      ${md} {
        padding: 3.875rem 2.375rem;
      }
      .content {
        text-align: center;
        .title {
          position: relative;
          .group {
            display: inline-block;

            position: absolute;

            ${md} {
              position: relative;
            }

            .circle {
              display: none;

              ${md} {
                position: absolute;
                top: -7px;
                left: 7px;
                display: inline-block;
                width: 2.625rem;
                height: 2.625rem;
                background: linear-gradient(
                  180deg,
                  rgba(154, 126, 255, 0.5) 0%,
                  rgba(212, 215, 243, 0) 138.33%
                );
                border-radius: 50%;
              }
            }
            img {
              width: 13.1875rem;
              height: 13.1875rem;

              position: absolute;
              top: -115px;
              left: -60px;

              ${md} {
                position: relative;
                top: 0;
                left: 0;
                width: 2.625rem;
                height: 2.625rem;
              }
            }
          }
          span {
            font-style: normal;
            font-weight: 900;
            font-size: 3.75rem;
            line-height: 4.375rem;
            letter-spacing: 0.32rem;

            position: relative;

            ${md} {
              display: none;
            }

            &:before {
              content: '';
              position: absolute;
              bottom: 15px;
              width: 100%;
              height: 1.375rem;
              background-color: ${palette.basicAccent2};
              z-index: -1;
            }
          }
        }

        .description {
          margin: 4.5rem 0 12.5rem;
          font-family: 'Noto Sans KR';
          font-weight: bold;
          font-size: 3.125rem;
          line-height: 5.625rem;

          text-align: center;

          ${md} {
            margin: 1.375rem 0;
            font-size: 1rem;
            line-height: 1.875rem;
          }
        }
      }

      .img-content {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .circle-background {
          position: relative;
          top: 0;
          background: linear-gradient(180deg, #d4d7f3 0%, rgba(212, 215, 243, 0) 138.33%);
          min-width: 95.6875rem;
          min-height: 95.6875rem;
          border-radius: 50%;

          z-index: -1;

          ${md} {
            display: none;
          }
        }

        .chat-mockup {
          max-width: 43.8125rem;
          margin: 4rem 0 0;
          position: absolute;
          left: 0;

          ${md} {
            margin: 0;
            max-width: 95%;
            position: relative;
          }
        }

        .right-arrow-1,
        .right-arrow-2 {
          width: 2.125rem;
          height: 2.125rem;

          position: absolute;

          ${md} {
            display: none;
          }
        }

        .right-arrow-1 {
          margin: 13.1875rem 51.75rem 0 41.8125rem;
        }

        .right-arrow-2 {
          margin: 70.875rem 51.75rem 0 41.8125rem;
        }

        .chat-group-content {
          position: absolute;
          right: -30px;
          margin-top: 4.25rem;
          max-width: 53.9375rem;
          text-align: center;

          font-family: 'Noto Sans KR';

          ${md} {
            position: relative;
            right: 0;
          }

          img {
            max-width: 100%;
          }

          p:nth-of-type(1) {
            margin-top: 1.25rem;
            font-weight: 500;
            font-size: 1.875rem;
            line-height: 2.6875rem;

            ${md} {
              margin-top: 1.4375rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
          }
          p:nth-of-type(2) {
            color: ${palette.deepGray};
            font-weight: 500;
            font-size: 1.875rem;
            line-height: 2.6875rem;

            ${md} {
              font-size: 0.875rem;
              line-height: 1.25rem;
            }

            span {
              color: #3700b9;
            }
          }
        }

        .gallery-image-content {
          position: absolute;
          right: 35px;
          margin-top: 59.125rem;
          padding-bottom: 18.75rem;
          max-width: 45.5rem;
          text-align: center;

          font-family: 'Noto Sans KR';

          ${md} {
            position: relative;
            right: 0;
            margin: 3.5625rem 0 4.0625rem;
            padding: 0;
          }
          img {
            max-width: 100%;
          }

          p {
            margin-top: 2.75rem;
            font-weight: 500;
            font-size: 1.875rem;
            line-height: 2.6875rem;

            ${md} {
              margin-top: 1.375rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
          }
        }
      }
    }
  }

  .nine {
    min-height: 76.0625rem;
    background: linear-gradient(180deg, #7c58ff 30.69%, #987dfc 61.42%, #b8a8f9 76%, #e8e8f4 100%);

    text-align: center;

    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;

    ${md} {
      min-height: 45.4375rem;
    }
    .wrapper {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      padding: 7.875rem 0 0 0;
      color: #ffffff;

      ${md} {
        padding: 1.625rem 0 0 0;
      }

      .title {
        font-size: 3.75rem;
        font-weight: 900;
        line-height: 4.375rem;
        letter-spacing: 0.32rem;

        ${md} {
          font-size: 1rem;
          line-height: 1.1875rem;
        }
      }

      .description {
        margin-top: 3.75rem;
        font-family: 'Noto Sans KR';
        font-size: 3.125rem;
        font-weight: bold;
        line-height: 5.625rem;

        ${md} {
          margin-top: 0.8125rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }

      .coupon-content {
        margin-top: 7.75rem;
        ${md} {
          margin-top: 3.25rem;
        }
        img {
          max-width: 76.625rem;
          ${md} {
            max-width: 100%;
          }
        }
      }

      .date {
        margin-top: 6.75rem;
        font-weight: 900;
        font-size: 3.75rem;
        line-height: 4.375rem;
        letter-spacing: 0.14rem;

        ${md} {
          margin-right: 10rem;
          margin-top: 4.375rem;
          font-size: 1.25rem;
          line-height: 1.5rem;
        }
      }

      .box {
        display: inline-block;

        margin-top: 2.0625rem;
        padding: 4rem 6.25rem;

        background-color: #ffffff;
        border-radius: 3.125rem;

        ${md} {
          margin-top: 0.625rem;
          padding: 1.25rem;
          border-radius: 0.625rem;
        }

        > div {
          display: grid;
          grid-template-columns: 0.5fr 1.5fr;
          align-items: center;
          justify-items: flex-start;
          color: #000000;

          font-family: 'Noto Sans KR';

          ${md} {
            grid-template-columns: 1fr;
          }

          &:nth-of-type(1) {
            margin-bottom: 2rem;

            ${md} {
              margin-bottom: 2.3125rem;
            }
          }

          > span:nth-of-type(1) {
            font-size: 2.5rem;
            font-weight: bold;
            line-height: 3.625rem;

            ${md} {
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
          }

          > span:nth-of-type(2) {
            font-size: 1.875rem;
            line-height: 2.6875rem;

            ${md} {
              font-size: 0.75rem;
              line-height: 1rem;
            }
          }
        }
      }

      .announcement {
        margin: 6rem 0 23.4375rem 80rem;
        font-family: 'Noto Sans KR';
        font-size: 1.875rem;
        font-weight: bold;
        line-height: 2.6875rem;

        ${md} {
          margin: 0.8125rem 0 3.6875rem 14rem;

          font-size: 0.75rem;
          line-height: 1rem;
        }
      }
    }
  }

  .ten {
    min-height: 126.5rem;

    ${md} {
      min-height: 48rem;
    }
    .wrapper {
      padding-top: 6.25rem;
      .title,
      .description {
        padding-left: 7.5rem;

        ${md} {
          padding-left: 2.25rem;
        }
      }
      .title {
        span {
          position: relative;

          font-size: 3.75rem;
          font-weight: 900;
          line-height: 4.375rem;
          letter-spacing: 0.32rem;

          ${md} {
            font-size: 1rem;
            line-height: 1.1875rem;
          }
          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 105%;
            height: 1.375rem;
            background-color: ${palette.basicAccent4};
            z-index: -1;

            ${md} {
              height: 0.8125rem;
            }
          }
        }
      }

      .description {
        margin-top: 2.75rem;
        font-family: 'Noto Sans KR';

        font-size: 2.5rem;
        font-weight: 500;
        line-height: 4.375rem;

        ${md} {
          margin-top: 1rem;
          font-size: 0.75rem;
          line-height: 1.25rem;
        }
      }

      .content {
        margin-top: 12rem;
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;

        ${md} {
          margin-top: 2.9375rem;
          grid-template-columns: 1fr;
        }

        .img-content {
          img {
            max-width: 100%;

            ${md} {
              max-width: 14.5rem;
            }
          }
        }

        .text-content {
          .box {
            font-family: 'Noto Sans KR';
            position: relative;
            margin-top: 6.125rem;
            margin-right: 12rem;
            padding: 4rem 12.1875rem;

            background-color: #ffffff;
            filter: drop-shadow(0px 0px 40px #c6bde9);
            border-radius: 2rem;
            text-align: center;

            display: grid;
            grid-template-columns: 1fr;
            gap: 8.125rem;

            ${md} {
              padding: 1.375rem 0;
              margin: 2.375rem auto 1.375rem;
              max-width: 16rem;

              gap: 2.75rem;
            }

            &:before {
              content: '';
              position: absolute;
              top: 40px;
              left: 190px;
              width: 1.625rem;
              height: 1.625rem;
              background: ${palette.red};
              box-shadow: 0 0 0.75rem ${palette.red};
              border-radius: 50%;

              ${md} {
                width: 0.5rem;
                height: 0.5rem;
                top: 20px;
                left: 45px;
              }
            }

            > div {
              > h3 {
                font-size: 2.5rem;
                font-weight: 500;
                line-height: 4.375rem;

                ${md} {
                  font-size: 0.75rem;
                  line-height: 1.5rem;
                }
              }

              > p {
                font-size: 1.25rem;
                line-height: 1.5rem;

                ${md} {
                  font-size: 0.625rem;
                  line-height: 1rem;
                }
              }
            }
          }

          .group {
            margin-top: 6.5rem;

            ${md} {
              margin-top: 1.375rem;
            }

            > div + div {
              margin-top: 1.5rem;

              ${md} {
                margin-top: 0.75rem;
              }
            }
            > div {
              display: flex;
              flex-flow: row nowrap;
              align-items: center;

              ${md} {
                padding: 0 1rem;
              }

              .circle {
                display: inline-flex;
                justify-content: center;
                align-items: center;

                width: 4.5rem;
                height: 4.5rem;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.5);

                ${md} {
                  width: 2.5rem;
                  height: 2.5rem;
                }

                img {
                  width: 2.375rem;
                  height: 2.375rem;

                  ${md} {
                    width: 1.3125rem;
                    height: 1.3125rem;
                  }
                }
              }

              > span {
                margin-left: 2.25rem;

                color: #464646;
                font-family: 'Noto Sans KR';
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 2.1875rem;

                ${md} {
                  margin-left: 0.8125rem;

                  font-size: 0.75rem;
                  line-height: 1.125rem;
                }
              }
            }
          }
        }
      }
    }
  }

  .eleven {
    padding: 21.625rem 0 15.875rem;

    ${md} {
      padding: 5.9375rem 0 0.625rem;
    }
    .wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

      .box {
        position: relative;

        padding: 0 10.875rem;

        background-color: #ffffff;
        box-shadow: 0 0 2.5rem ${palette.basicAccent3};
        border-radius: 3.1875rem;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        font-family: 'Noto Sans KR';

        ${md} {
          padding: 0 1.5rem;
        }
        .question {
          position: absolute;
          top: -200px;

          width: 16rem;
          height: 16rem;

          ${md} {
            top: -45px;
            width: 4rem;
            height: 4rem;
          }
        }

        .title {
          margin: 6.25rem 0 3.125rem;

          font-size: 3.125rem;
          font-weight: 900;
          line-height: 4.5rem;

          ${md} {
            margin: 2.125rem 0 1.125rem;
            font-size: 1.25rem;
            line-height: 1.8125rem;
          }
        }

        .description {
          margin-bottom: 4.375rem;

          font-size: 2.5rem;
          font-weight: bold;
          line-height: 4.75rem;

          display: inline-flex;
          flex-flow: column nowrap;
          align-items: center;

          color: #484a54;

          ${md} {
            margin-bottom: 1.3125rem;
            font-size: 0.875rem;
            line-height: 1.625rem;
          }

          > p {
            display: inline-flex;
            flex-flow: row nowrap;
            align-items: center;

            > img {
              width: 2.6875rem;
              height: 2.6875rem;
              ${md} {
                width: 1.0625rem;
                height: 1.0625rem;
              }
            }

            > span {
              color: #101417;
            }

            > b {
              color: ${palette.basicAccent};
            }
          }
        }
      }
    }
  }

  .twelve {
    min-height: 61rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url('/static/background.png') no-repeat center/cover;

    ${md} {
      min-height: 12rem;
    }
    .wrapper {
      font-family: 'Noto Sans KR';
      text-align: center;
      ${md} {
        padding-top: 5.875rem;
      }
      .title {
        font-size: 6.875rem;
        font-weight: bold;
        line-height: 10rem;

        color: #3700b9;

        ${md} {
          font-size: 1.875rem;
          line-height: 2.6875rem;
        }
      }

      .description {
        margin-top: 4.1875rem;

        font-size: 2.5rem;
        font-weight: 500;
        line-height: 3.625rem;
        color: #464646;

        ${md} {
          margin-top: 0.9375rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }

      .btn-group {
        margin-top: 6.875rem;
        display: inline-flex;
        flex-flow: row nowrap;
        gap: 3.3125rem;

        ${md} {
          margin-top: 1.25rem;
          gap: 0.5rem;
        }

        > a {
          cursor: pointer;

          > img {
            max-width: 26.25rem;
            max-height: 8.125rem;
            ${md} {
              max-width: 6.75rem;
              max-height: 2.375rem;
            }
          }
        }
      }
    }
  }
`

export default Home
