<template>
    <div class="main">
        <b-navbar toggleable="sm" type="dark" fixed="top" variant="faded" transparent="true">
            <div class="container">
                <b-navbar-nav>
                    <b-navbar-brand class="text-left" href="#top-page">PAJEET </b-navbar-brand>
                </b-navbar-nav>
                <b-navbar-toggle v-if="mobileView==true" target="nav-collapse"></b-navbar-toggle>
                <b-collapse v-if="mobileView==true" id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-navbar-brand href="#tokens">Tokenomics </b-navbar-brand>
                        <b-navbar-brand href="#roadmap">Roadmap </b-navbar-brand>
                        <b-navbar-brand href="#features">Features </b-navbar-brand>
                    </b-navbar-nav>
                </b-collapse>

                <b-navbar-nav v-if="mobileView==false" class="ml-auto">
                    <b-navbar-brand href="#tokens">Tokenomics </b-navbar-brand>
                    <b-navbar-brand href="#roadmap">Roadmap </b-navbar-brand>
                    <b-navbar-brand href="#features">Features </b-navbar-brand>
                </b-navbar-nav>
            </div>
        </b-navbar>

        <div class="top-page" id="top-page">
            <div class="container">
                <div class="col-sm">
                    <img class="about-image center-image" src="@/assets/bg.png"/>
                </div>
            </div>
        </div>

        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="ml-4 about-content text-center">
                            <b-jumbotron header="WHO ARE WE?">
                                <small>It takes COURAGE to call yourself a COWARD. Yes this is a MEME Token. Yes we believe in this project and we're focused on bringing you COURAGE This isn't for the Cowards.</small>
                                <h3 style="padding-top: 70px;">Come forth!
                                    Take your Stand!
                                    Let us prove to everyone that even a COWARDLY DOG can easily go TO THE MOON!
                                </h3>
                                <div class="m-4">
                                    <small>
                                        Like you, We are the Community. We've been through the rugs and we want to make this token last. We will immediately renounce and focus on marketing and growing and making the community stronger.

                                        The success of each token as we see with other projects is based on the Marketing and the Community that supports the project. Timing is everything and while the crypto market is gaining it's momentum We've DECIDED to start this.

                                        We're already starting on creating some Merch and we plan to release it next week. You can check our roadmap below for that.
                                    </small>
                                </div>
                            </b-jumbotron>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <img class="content-image" src="@/assets/bg.png"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="tokenomics" id="tokens">
            <div class="container">
                <div class="row">
                    <div class="tokenomics-content text-center">
                        <b-jumbotron header="TOKENOMICS">
                        </b-jumbotron>                        
                    </div>
                    <div class="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
                        <img class="content-image" src="@/assets/tokenomics.png"/>
                    </div>
                    <div class="col-sm-6">
                        <div class="tokenomics-content" data-aos="fade-right" data-aos-duration="2000">
                            <ul class="ml-4">
                                <li>
                                    TOTAL SUPPLY - 1,000,000,000,000,000
                                </li>
                                <li>
                                    35% Burned tokens - 350,000,000,000,000
                                </li>
                            </ul>

                            <ul class="ml-4">
                                <li>
                                    15% Seed Round - 150,000,000,000,000
                                </li>
                                <li>
                                    LOCK AND VESTED 3 WEEKS (25% RELEASE AT LAUNCH)
                                </li>
                                <li>
                                    24% Public Round DX SALE - 240,000,000,000,000
                                </li>
                                <li>
                                    24% Pancake liquidity - 240,000,000,000,000
                                </li>
                            </ul>

                            <ul class="ml-4">
                                <li>
                                    1% DEV Token - 10,000,000,000,000,000
                                </li>
                                <li>
                                    LOCKED AND VESTED 3 MONTHS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="roadmap text-light" id="roadmap">
            <div class="container">
                <div class="roadmap-content text-center">
                    <b-jumbotron header="ROADMAP">
                    </b-jumbotron>
                </div>

                <div class="row ml-4 roadmap-quarter-content" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="250">
                   <div class="col-sm-6">
                       <h2 class="text-center">Q2</h2>
                   </div>
                   <div class="col-sm-6">
                        <span class="text-left">
                            Telegram Creation<br>
                            Telegram Bot setup<br>
                            DX Sale Creation<br>
                            Liquidity Lock<br>
                            Pancake Swap Listing<br>
                            Meme Competitions<br>
                            Poocoin Paid Ads<br>
                            Youtube Influencer Marketing<br>
                            Tiktok Influencer Marketing<br>
                            Coingecko application<br>
                            Coinmaketcap application<br>
                            Telegram Sticker Competition<br>
                            1st Exchange Listing<br>
                        </span>
                   </div>
                </div>
               <div class="row ml-4 roadmap-quarter-content" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="250">
                   <div class="col-sm-6">
                       <h2 class="text-center">Q3</h2>
                   </div>
                   <div class="col-sm-6">
                        <span class="text-left">
                            2nd Exchange Listing<br>
                            Website Updates<br>
                            Logo and Branding updates<br>
                            Token Burn<br>
                            Setup Merchandise<br>
                        </span>
                   </div>
               </div>
                <div class="row ml-4 mb-0 roadmap-quarter-content" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="250">
                   <div class="col-sm-6">
                       <h2 class="text-center">Q4</h2>
                   </div>
                   <div class="col-sm-6">
                        <span class="text-left">
                            MORE updates comming soon!
                        </span>
                   </div>
                </div>
            </div>
        </div>

        <div class="features" id="features">
            <div class="container">'
                <div class="mt-4 mb-4">
                    <b-jumbotron header="BEST FEATURES">
                    </b-jumbotron>
                </div>
                <div class="features-content row mt-4" data-aos="fade-up" data-aos-duration="3000" data-aos-offset="250">
                    <div class="col-sm-3">
                        <img class="content-image" src="@/assets/feat1.png"/>
                        <h5>Deflationary Token.</h5>
                        <small>
                            4% Will be distributed to the holders of Cowardly Dog.<br>
                            4% Will be burned Immediately.<br>
                            2% Marketing.<br>
                        </small>
                    </div>
                    <div class="col-sm-3">
                        <img class="content-image" src="@/assets/feat2.png"/>
                        <h5>Utility</h5>
                        <small>
                            Cowardly Dog Tokens will be used as a payment option to buy Cowardly Dog Merch. (Merch will be updated here in the website by Next week June 18, 2021 1:00PM UTC).
                        </small>
                    </div>
                    <div class="col-sm-3">
                        <img class="content-image" src="@/assets/feat3.png"/>
                        <h5>Full Liquidity</h5>
                        <small>
                            100% of the DX Sale amount raised will be fully added to the liquidity.
                        </small>
                    </div>
                    <div class="col-sm-3">
                        <img class="content-image" src="@/assets/feat3.png"/>
                        <h5>Fair Launch</h5>
                        <small>
                            No Dev Wallets as we envision this to be a community driven project.
                        </small>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="text-center">
                <div><i class="fab fa-facebook fa-5x"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String,
        },
        data() {
            return {
                mobileView: false
            }
        },
        methods: {
            isMobile() {
                if (screen.width <= 760) {
                  this.mobileView = true
                } else {
                  this.mobileView = false
                }
            }
        },
        created(){
            this.isMobile()
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes MoveUpDown{0%{position: relative; top:0;}50%{position: relative; top:10px;} 100%{position: relative; top:0;}}

b-jumbotron {
    font-weight: bold;
}

.about-image {
    animation: MoveUpDown 2s linear infinite;
    max-width: 100%;
    max-height: 100%;
    display: block;
}

.tokenomics-image {
    background-image: url('~@/assets/tokenomics.png');
}

.bg-image {
    height: 500px;
    background-position: center right;
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
}

.about {
    background-color: #d6d5d2;
}

.about-content {
    padding-top: 50px;
}

.tokenomics {
    background-color: #ffca6e;
}

.tokenomics-content {
    padding-top: 50px;
}

.roadmap {
    background-color: #464746;
}

.roadmap-content {
    padding-top: 50px;
}

.roadmap-quarter-content {
    padding-bottom: 100px;
}

.features {
    text-align: center;
}


.features-content {
    padding-top: 50px;
}

.content-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
}

.footer {
    min-height: 200px;
}

.navbar {
    background: rgba(0,0,0,0.4);
}

.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.main {
    @media (min-width: 1200px) {
        max-width: 600px
    }

    @media (min-width: 1600px) {
        max-width: 800px
    }

}

</style>
