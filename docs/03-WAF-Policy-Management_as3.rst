Use Case 03: WAF (XML) Policy Management with AS3
=================================================

OVERVIEW
--------
WAF-Policy-Management.yaml is a templated Ansible Playbook to manage blocked IP addresses and URL's on F5 ASM through Ansible automation. 

Web Application Firewalls work to protect web applications by inspecting incoming traffic, blocking bots, SQL injection, Cross Site Scripting and a host of other attacks. 
This playbook is designed to demonstrate a basic WAF scenario to create and modify an F5 WAF (ASM) policy to block URL(s) or IP address(s) or both. 

Using this playbook, other security vendors or even ticketing based solutions like Service NOW, users will be able to create a start to finish automated solution based on when attacks can occur.

RUNNING THE TEMPLATE
--------------------
Running this template assumes that a F5 BIG-IP instance, necessary webservers and Ansible node are available.  
To deploy a sandbox infrastructure in AWS users can use the `Ansible Workshops <https://github.com/ansible/workshops>`__

1. Login to the Ansible host

2. Change Directory in the Ansible Host to the use-cases repo previously downloaded

   .. code::
   
      cd ~/f5-bd-ansible-usecases/AS3/03-WAF-Policy-Management-AS3/

3. Modify the Vars file for the bitbucket repo (i like using VI but can use any editor)

   .. note::

   This is a required step!

   .. code::
   
      vi vars/f5_vars.yml

   .. code::
   
      ...
      #GIT CREDENTIALS
      git_username: "vdi-tech-guy"
      git_password: "2UEcBDRpK5TKUGwraHgx" #This Code is invalid needs to be changed.
      git_email: "m.mabis@f5.com"

      #GIT Site Information
      git_website: "https://bitbucket.org/"
      git_api_url: "https://api.bitbucket.org/2.0/repositories/"
      git_workspace: "vdi-tech-guy"
      git_asm_default_repo: "https://bitbucket.org/vdi-tech-guy/f5-asm-policies.git" #This repo is public and can be used regardless of site/credentials

   change the git variables to work with your git environment

4. Launch the Ansible playbook 'WAF-Policy-Management.yaml':

   .. code::

      ansible-playbook WAF-Policy-Management.yaml

5. Verify the F5 Configuration

BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP from instructor_inventory file in provisioning host.
- Login to the BIG-IP
- Change the Partition from Common to "Ansible Workshops"
- Navigate to Security->Application security to view the WAF policy deployed
- Navigate to Local traffic->Virtual server
- View the deployed use case access F5-BIG-IP-Public-IP:port (8082)

.. note::

   Username is Admin and the Password would be part of the Linklight Lab password or in the f5_vars.yml file used to provision the lab.

6. Verify the Website Availability

- From a client brower, access the application through the virtual address on the F5 BIG-IP.
- To access this site externally you will need to use the instructor inventory studentX-f5 IP Address which will be refered as (F5-BIG-IP-Public-IP) below.
- From a client browser, access the F5-BIG-IP-Public-IP on port 8082 to view the webpage to validate accessibility (https://F5-BIG-IP-Public-IP:8082)
- Access the URL's present in the f5_vars.yml file to see the WAF policy in action 

  - https://F5-BIG-IP-Public-IP:8082/blocked.html
  
  - https://F5-BIG-IP-Public-IP:8082/hacked.html
  
  - https://F5-BIG-IP-Public-IP:8082/robot.txt 

.. note::

   Your browser is presented with a certificate (clientssl cert) that is imported from the AS3 play. You will therefore see an ‘unsafe’ message from your browser which is expected in this demo. Click proceed to website.


7. Before moving to the next usecase we need to remove the configuration as we are deploying these usecases as a separated Tenant.

   .. code::
   
      ansible-playbook delete.yml

This template will configure the F5 BIG-IP to provision the `WAF module <https://www.f5.com/products/security/advanced-waf>`__, create a Virtual IP (VIP) including a Pool and nodes, a WAF policy for the use case, then modify the policy to block IP’s and URL’s.

.. note::

   This Playbook modifies the provisioning of modules on the BIG-IP and will take some time to complete as the new module comes online. This Playbook detects if blocked URL or IP already exists and only add what is new (idempotency).  
