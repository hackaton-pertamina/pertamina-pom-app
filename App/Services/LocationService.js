import { PermissionsAndroid, ToastAndroid } from 'react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import GeoLocation from 'react-native-geolocation-service';

export const showLocationServiceDialog = async () => {
  try {
    const locationStatus = await LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "<h2>Gunakan Lokasi</h2>Aplikasi ini ingin mengubah pengaturan lokasi anda:<br/><br/>Menggunakan GPS, Wi-Fi, dan jaringan seluler untuk mendapatkan lokasi",
      ok:"Ya",
      cancel: "Tidak",
      enableHighAccuracy: true,
    })
    if(locationStatus) {
      return true;
    } else {
      ToastAndroid.show(
        'Anda harus mengizinkan / mengaktifkan GPS',
        ToastAndroid.SHORT
      );
    } 
  } catch(error) {
    console.warn(error);
  }
}

export const requestLocationPermission = async () => {
  try {
  const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else if (granted === PermissionsAndroid.RESULTS.DENIED){
      ToastAndroid.show(
        'Untuk dapat melakukan proses Tagging Lahan Anda harus mengizinkan / mengaktifkan GPS',
        ToastAndroid.SHORT
      );
    } else {
      ToastAndroid.show(
        'Untuk dapat melakukan proses Tagging Lahan Anda harus mengizinkan / mengaktifkan GPS',
        ToastAndroid.SHORT
      );
    }
  } catch(error) {
    console.warn(error);
  }
}

export const getCurrentLocation = (timeout = 60000) => new Promise((resolve, reject) => {
  try {
    GeoLocation.getCurrentPosition((position) => {
      resolve(position);
    }
    , (error) => {
      if (error.code === 3) {
        getCurrentLocationLowAcc().then((lowAccPosition) => {
          resolve(lowAccPosition);
        }).catch((error) => {
          reject(error);
        });
      } else {
          reject(error);
      }
    }
    , {
      enableHighAccuracy: true,
      timeout,
      maximumAge: 0
    });
      
  } catch (error) {
  }      
});

export const getCurrentLocationLowAcc = () => new Promise((resolve, reject) => {
  GeoLocation.getCurrentPosition((locLowAccuracy) => {
    resolve(locLowAccuracy);
  }, (error) => {
    reject(error);
  }, {
    enableHighAccuracy: false,
    timeout: 60000,
    maximumAge: 3600000
  });
});

