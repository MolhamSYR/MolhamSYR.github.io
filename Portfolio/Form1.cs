using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Media;


namespace Portfolio
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            System.Environment.Exit(0);
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            System.Media.SoundPlayer player = new SoundPlayer(Properties.Resources.page_flip);

            player.Play();
        }

        private void frontEnd1_Load(object sender, EventArgs e)
        {

        }

        private void mainSpace_Paint(object sender, PaintEventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            frontEnd1.Hide();
            desktopApps1.Hide();
            
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            System.Media.SoundPlayer player = new SoundPlayer(Properties.Resources.page_flip);

            player.Play();
            frontEnd1.Show();
            desktopApps1.Hide();
        }

        private void button5_Click(object sender, EventArgs e)
        {

            System.Media.SoundPlayer player = new SoundPlayer(Properties.Resources.page_flip);

            player.Play();
            frontEnd1.Hide();
            desktopApps1.Hide();
            
            
        }

        private void frontEnd1_Load_1(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            System.Media.SoundPlayer player = new SoundPlayer(Properties.Resources.page_flip);

            player.Play();

            frontEnd1.Hide();
            desktopApps1.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            System.Media.SoundPlayer player = new SoundPlayer(Properties.Resources.page_flip);

            player.Play();
        }
    }
}
