import CloudyWeather from "./Sun/Cloudy/cloudy"
import FogWeather from "./Fog/fog"
import IcePelletsWeather from "./IcePellets/HeavyIcePellets/icePellets"
import MistWeather from "./Mist/mist"
import OvercastWeather from "./Overcast/overcast"
import HeavyRainWeather from "./Rain/HeavyRain/heavyRain"
import HeavyRainThunderWeather from "./Rain/HeavyRainAndThunder/heavyRainAndThunder"
import LightRainWeather from "./Rain/LightRain/lightRaint"
import LightRainThunderWeather from "./Rain/LightRainAndThunder/lightRainAndThunder"
import LightRainPossibleWeather from "./Rain/LightRainPossible/lightRainPossible"
import TorrentialRainShowerWeather from "./Rain/TorrentialRainShower/torrentialRainShower"
import BlowingSnowWeather from "./Snow/BlowingSnow/blowingSnow"
import HeavySnowWeather from "./Snow/HeavySnow/heavySnow"
import HeavySnowThunderWeather from "./Snow/HeavySnowAndThunder/heavySnowAndThunder"
import HeavySnowShowersWeather from "./Snow/HeavySnowShower/heavySnowShower"
import LightSnowWeather from "./Snow/LightSnow/lightSnow"
import LightSnowThunderWeather from "./Snow/LightSnowAndThunder/lightSnowAndThunder"
import LightSnowPossibleWeather from "./Snow/LightSnowPossible/lightSnowPossible"
import LightSnowShowersWeather from "./Snow/LightSnowShower/lightSnowShower"
import SunnyWeather from "./Sun/Sunny/sunny"
import ThunderPossibleWeather from "./ThunderPossible/thunderPossible"
import PartlyCloudyWeather from "./Sun/PartlyCloudy/partlyCloudy"
import BlizzardWeather from "./Snow/Blizzard/blizzard"
import LightSleetWeather from "./Sleet/LightSleet/lightSleet"
import HeavySleetWeather from "./Sleet/HeavySleet/heavySleet"
import LightIcePelletsWeather from "./IcePellets/LightIcePellets/lightIcePellets"
import FreezingDrizzle from "./Sleet/FreezingDrizzle/freezingDrizzle"
import HeavyFreezingDrizzle from "./Sleet/HeavyFreezingDrizzle/heavyFreezingDrizzle"

const WeatherCodes: Record<number, string | React.ComponentType> = {
    1135: FogWeather, //fog
    1147: FogWeather, //freezing_fog

    1030: MistWeather, //mist
    1009: OvercastWeather, //overcast

    1063: LightRainPossibleWeather, // patchy_rain_possible
    1150: LightRainWeather, //patchy_light_drizzle"
    1153: LightRainWeather, //light_drizzle
    1180: LightRainWeather, //patchy_light_rain
    1183: LightRainWeather, //light_rain
    1186: LightRainPossibleWeather, //moderate_rain_at_times
    1189: LightRainWeather, //moderate_rain
    1192: HeavyRainWeather, //heavy_rain_at_times
    1195: HeavyRainWeather, //heavy_rain
    1240: LightRainWeather, //light_rain_shower
    1243: HeavyRainWeather, //heavy_rain_shower
    1246: TorrentialRainShowerWeather, //torrential_rain_shower
    1273: LightRainThunderWeather, //patchy_light_rain_with_thunder
    1276: HeavyRainThunderWeather, //heavy_rain_with_thunder

    1069: LightSleetWeather, //patchy_sleet_possible
    1072: FreezingDrizzle, //patchy_freezing_drizzle_possible
    1168: FreezingDrizzle, //freezing_drizzle
    1171: HeavyFreezingDrizzle, //heavy_freezing_drizzle
    1198: FreezingDrizzle, //light_freezing_rain
    1201: HeavyFreezingDrizzle, //heavy_freezing_rain
    1204: LightSleetWeather, //light_sleet
    1207: HeavySleetWeather, //heavy_sleet
    1237: IcePelletsWeather, //ice_pellets
    1249: LightSleetWeather, //light_sleet_showers
    1252: HeavySleetWeather, //heavy_sleet_showers
    1261: LightIcePelletsWeather, //light_showers_of_ice_pellets
    1264: IcePelletsWeather, //heavy_showers_of_ice_pellets

    1066: LightSnowPossibleWeather, //patchy_snow_possible
    1114: BlowingSnowWeather, // blowing_snow
    1117: BlizzardWeather, //blizzard
    1210: LightSnowWeather, //patchy_light_snow
    1213: LightSnowWeather, //light_snow
    1216: LightSnowWeather, //patchy_moderate_snow
    1219: LightSnowWeather, //moderate_snow"
    1222: HeavySnowWeather, //patchy_heavy_snow"
    1225: HeavySnowWeather, //heavy_snow
    1255: LightSnowShowersWeather, //light_snow_showers
    1258: HeavySnowShowersWeather, //heavy_snow_showers
    1279: LightSnowThunderWeather, //patchy_light_snow_with_thunder
    1282: HeavySnowThunderWeather, //heavy_snow_with_thunder

    1000: SunnyWeather, //sunny
    1003: PartlyCloudyWeather, //partly_cloudy
    1006: CloudyWeather, //cloudy

    1087: ThunderPossibleWeather //Thundery_outbreaks_possible
}

export default WeatherCodes