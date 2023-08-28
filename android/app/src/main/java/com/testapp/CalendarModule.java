package com.testapp;
import android.util.Log;
import com.facebook.react.bridge.Promise;
import androidx.annotation.NonNull;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
    private int eventCount = 0;
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }
    @ReactMethod
    public void createCalendarEvent( Promise promise){


   try {
       promise.resolve("Data");
       eventCount += 1;
       sendEvent(getReactApplicationContext(),"eventCount", eventCount);
   }catch (Exception e){
       promise.reject("Error from promise", e);
   }
    }
    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           int params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
