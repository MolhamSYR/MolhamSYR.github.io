namespace Portfolio
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.button1 = new System.Windows.Forms.Button();
            this.sideMenu = new System.Windows.Forms.Panel();
            this.button5 = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.button4 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.mainSpace = new System.Windows.Forms.Panel();
            this.desktopApps1 = new Portfolio.DesktopApps();
            this.frontEnd1 = new Portfolio.FrontEnd();
            this.sideMenu.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.mainSpace.SuspendLayout();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Impact", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(3, 298);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(141, 35);
            this.button1.TabIndex = 0;
            this.button1.Text = "Front End";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click_1);
            // 
            // sideMenu
            // 
            this.sideMenu.BackColor = System.Drawing.SystemColors.InactiveCaptionText;
            this.sideMenu.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.sideMenu.Controls.Add(this.button5);
            this.sideMenu.Controls.Add(this.pictureBox1);
            this.sideMenu.Controls.Add(this.label2);
            this.sideMenu.Controls.Add(this.label1);
            this.sideMenu.Controls.Add(this.button1);
            this.sideMenu.Controls.Add(this.button4);
            this.sideMenu.Controls.Add(this.button3);
            this.sideMenu.Controls.Add(this.button2);
            this.sideMenu.Location = new System.Drawing.Point(0, 0);
            this.sideMenu.Name = "sideMenu";
            this.sideMenu.Size = new System.Drawing.Size(144, 478);
            this.sideMenu.TabIndex = 1;
            this.sideMenu.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            // 
            // button5
            // 
            this.button5.Font = new System.Drawing.Font("Impact", 12F);
            this.button5.Location = new System.Drawing.Point(3, 253);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(138, 39);
            this.button5.TabIndex = 6;
            this.button5.Text = "Home Page";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(3, 115);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(141, 120);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 2;
            this.pictureBox1.TabStop = false;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Impact", 20F);
            this.label2.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.label2.Location = new System.Drawing.Point(-4, 8);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(129, 42);
            this.label2.TabIndex = 5;
            this.label2.Text = "Molham";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Impact", 20F);
            this.label1.ForeColor = System.Drawing.SystemColors.ControlLightLight;
            this.label1.Location = new System.Drawing.Point(22, 50);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(117, 42);
            this.label1.TabIndex = 4;
            this.label1.Text = "Coding";
            // 
            // button4
            // 
            this.button4.Font = new System.Drawing.Font("Impact", 12F);
            this.button4.Location = new System.Drawing.Point(3, 420);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(138, 39);
            this.button4.TabIndex = 3;
            this.button4.Text = "Discord Bots";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // button3
            // 
            this.button3.Font = new System.Drawing.Font("Impact", 12F);
            this.button3.Location = new System.Drawing.Point(3, 378);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(138, 36);
            this.button3.TabIndex = 2;
            this.button3.Text = "Desktop Apps";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // button2
            // 
            this.button2.Font = new System.Drawing.Font("Impact", 12F);
            this.button2.Location = new System.Drawing.Point(3, 339);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(138, 33);
            this.button2.TabIndex = 1;
            this.button2.Text = "Back End";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // mainSpace
            // 
            this.mainSpace.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.mainSpace.Controls.Add(this.desktopApps1);
            this.mainSpace.Controls.Add(this.frontEnd1);
            this.mainSpace.Location = new System.Drawing.Point(148, 0);
            this.mainSpace.Name = "mainSpace";
            this.mainSpace.Size = new System.Drawing.Size(582, 478);
            this.mainSpace.TabIndex = 2;
            this.mainSpace.Paint += new System.Windows.Forms.PaintEventHandler(this.mainSpace_Paint);
            // 
            // desktopApps1
            // 
            this.desktopApps1.BackColor = System.Drawing.SystemColors.InactiveCaptionText;
            this.desktopApps1.Location = new System.Drawing.Point(1, -1);
            this.desktopApps1.Name = "desktopApps1";
            this.desktopApps1.Size = new System.Drawing.Size(582, 478);
            this.desktopApps1.TabIndex = 1;
            // 
            // frontEnd1
            // 
            this.frontEnd1.BackColor = System.Drawing.SystemColors.InactiveCaptionText;
            this.frontEnd1.Location = new System.Drawing.Point(-1, -1);
            this.frontEnd1.Name = "frontEnd1";
            this.frontEnd1.Size = new System.Drawing.Size(582, 478);
            this.frontEnd1.TabIndex = 0;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.InactiveCaptionText;
            this.ClientSize = new System.Drawing.Size(731, 483);
            this.Controls.Add(this.mainSpace);
            this.Controls.Add(this.sideMenu);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Text = "Molham Portfolio";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.sideMenu.ResumeLayout(false);
            this.sideMenu.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.mainSpace.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Panel sideMenu;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Panel mainSpace;
        private System.Windows.Forms.Button button5;
        private DesktopApps desktopApps1;
        private FrontEnd frontEnd1;

    }
}

