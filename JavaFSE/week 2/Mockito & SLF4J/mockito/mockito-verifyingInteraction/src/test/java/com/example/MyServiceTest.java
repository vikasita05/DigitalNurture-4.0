package com.example;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {
		@Test
	    public void testVerifyInteraction() {
	        //Create mock
	        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

	        //Inject into service
	        MyService service = new MyService(mockApi);

	        //Call method
	        service.fetchData();
	        //service.fetchData();

	        //Verify method was called
	        verify(mockApi).getData();// PASS if it was called
	        //verify(mockApi, times(2)).getData();//twice call
	    }
	}
