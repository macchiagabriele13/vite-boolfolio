<script>
export default {
    name: 'HomeView',

}
</script>

<template>
    <div class="features-3">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <h2 class="title">Simpler. Smarter. Faster.</h2>
                    <h4 class="description">The CloudCheckr Cloud Management Platform (CMP) provides full visibility and
                        control to reduce costs, improve cybersecurity posture, and automate critical tasks.</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-success icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                            </svg>
                        </div>
                        <h4 class="info-title">Asset Management</h4>
                        <p class="description">Cross-account dashboards provide sophisticated reporting for enterprise.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info icon-circle">
                            <font-awesome-icon icon="fa-solid fa-meteor" />
                        </div>
                        <h4 class="info-title">Resource Utilization</h4>
                        <p class="description">CloudCheckr provides summary and detailed usage statistics for resources.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-primary icon-circle">
                            <i class="now-ui-icons tech_watch-time"></i>
                        </div>
                        <h4 class="info-title">Self-Healing</h4>
                        <p class="description">CloudCheckr enables users to save money, time, and effort.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
use .features-3 {
    text-align: center;
    padding: 80px 0;
}






@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }

    .col-md-8 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    .col-md-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }

}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }

}

.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}


.ml-auto,
.mx-auto {
    margin-left: auto !important;
}

.mr-auto,
.mx-auto {
    margin-right: auto !important;
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.title {
    font-weight: 700;
    padding-top: 30px;
}


h2 {
    font-size: 2.5em;
    margin-bottom: 30px;
    line-height: 1.2;
}

.description,
.card-description,
.footer-big p {
    color: #9a9a9a;
    font-weight: 300;
}

h4 {
    font-size: 1.5em;
    line-height: 1.45em;
    margin-top: 30px;
    margin-bottom: 15px;
}

.info {
    max-width: 360px;
    margin: 0 auto;
    padding: 70px 0 30px;
    text-align: center;
}

.icon.icon-success.icon-circle {
    -webkit-box-shadow: 0 9px 30px -6px rgb(24 206 15 / 30%);
    box-shadow: 0 9px 30px -6px rgb(24 206 15 / 30%);
}

.info .icon.icon-circle {
    max-width: 80px;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    -webkit-box-shadow: 0 9px 35px -6px rgb(0 0 0 / 30%);
    box-shadow: 0 9px 35px -6px rgb(0 0 0 / 30%);
    font-size: .7142em;
    background-color: #fff;
    position: relative;
}

.icon.icon-success {
    color: #18ce0f;
}

.info .icon {
    color: #888;
    -webkit-transition: -webkit-transform .4s, -webkit-box-shadow .4s;
    transition: -webkit-transform .4s, -webkit-box-shadow .4s;
    transition: transform .4s, box-shadow .4s;
    transition: transform .4s, box-shadow .4s, -webkit-transform .4s, -webkit-box-shadow .4s;
}


.info .icon.icon-circle i {
    line-height: 2.7;
}

.info .icon>i {
    font-size: 3em;
}

svg {
    height: inherit;
    width: 50%;
}
</style>