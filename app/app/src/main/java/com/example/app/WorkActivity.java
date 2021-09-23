package com.example.app;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationBarView;

public class WorkActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_work);

        BottomNavigationView navigationView = findViewById(R.id.bottomNavb);
        navigationView.setOnItemSelectedListener(new NavigationBarView.OnItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()) {
                    case R.id.action_home:
                        Intent intentHome = new Intent(WorkActivity.this, MainActivity.class);
                        startActivity(intentHome);
                        break;
                    case R.id.action_page:
                        Intent intentPage = new Intent(WorkActivity.this, WorkActivity.class);
                        startActivity(intentPage);
                        break;
                    default:
                        break;
                }
                return true;
            }
        });
    }
}