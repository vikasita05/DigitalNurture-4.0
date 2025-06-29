package com.example;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class LifecycleTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();  // Arrange
        System.out.println("Setup before each test");
    }

    @After
    public void tearDown() {
        System.out.println("Cleanup after each test");
    }

    @Test
    public void testAdd_AAA() {
        // Act
        int result = calculator.add(10, 20);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testMultiply_AAA() {
        int result = calculator.multiply(3, 4);
        assertEquals(12, result);
    }
}
