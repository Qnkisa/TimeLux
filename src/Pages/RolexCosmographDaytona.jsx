import React,{useState} from "react"
import WatchesData from "../data/WatchesData"
import WatchesPageTemplate from "../components/WatchesPageTemplate"
import {Link} from "react-router-dom"

export default function RolexCosmographDaytona(){
    const currentWatch = WatchesData.find(watch => watch.id === 6);
    const otherWatchOne = currentWatch.otherWatches[0];
    const otherWatchTwo = currentWatch.otherWatches[1];
    const otherWatchThree = currentWatch.otherWatches[2];

    return (
        <WatchesPageTemplate
            heroImage = {currentWatch.image}
            watchNameHero = {currentWatch.name}
            watchMaterialHero = {currentWatch.material}
            watchPriceHero = {currentWatch.price}
            retailerLink = {currentWatch.retailerLink}
            watchLinearGradient = {currentWatch.watchGradient}
            watchMotoHeading = {currentWatch.watchSignatureHeading}
            watchMotoText = {currentWatch.watchSignatureText}
            watchOneId = {otherWatchOne.id}
            watchOneLink = {otherWatchOne.page}
            watchOneImage = {otherWatchOne.image}
            watchOneName = {otherWatchOne.name}
            watchTwoId = {otherWatchTwo.id}
            watchTwoLink = {otherWatchTwo.page}
            watchTwoImage = {otherWatchTwo.image}
            watchTwoName = {otherWatchTwo.name}
            watchThreeId = {otherWatchThree.id}
            watchThreeLink = {otherWatchThree.page}
            watchThreeImage = {otherWatchThree.image}
            watchThreeName = {otherWatchThree.name}
        />
    )
}