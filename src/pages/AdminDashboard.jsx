import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import { SiteContentContext } from '../context/SiteContentContext';
import './Admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('notices');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const { content, updateContent } = useContext(SiteContentContext);
  const [editingSection, setEditingSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toppers State
  const [isAddingTopper, setIsAddingTopper] = useState(false);
  const currentYear = new Date().getFullYear();
  const batches = Array.from({length: 5}, (_, i) => (currentYear - i).toString());

  // Mock Data
  const [notices, setNotices] = useState([
    { id: 1, title: 'Class 11 Admissions Open for 2024', type: 'Admissions', date: '2023-10-20' },
    { id: 2, title: 'Science Exhibition', type: 'Events', date: '2023-11-15' },
    { id: 3, title: 'Holiday List Updated', type: 'Updates', date: '2023-12-01' }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin');
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setEditingItem({ id: Date.now(), title: '', type: 'Updates', date: '' });
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingItem) {
      const exists = notices.find(n => n.id === editingItem.id);
      if (exists) {
        setNotices(notices.map(n => n.id === editingItem.id ? editingItem : n));
      } else {
        setNotices([...notices, editingItem]);
      }
    }
    setIsEditing(false);
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this item?')) {
      setNotices(notices.filter(n => n.id !== id));
    }
  };

  const handleContentSave = (e, section) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    updateContent(section, data);
    alert('Content updated successfully! Changes are now live.');
  };

  const handleDeleteTopper = (id) => {
    if(window.confirm('Are you sure you want to delete this topper?')) {
      const newToppers = content.toppers.filter(t => t.id !== id);
      updateContent('toppers', newToppers);
    }
  };

  const handleAddTopper = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTopper = {
      id: Date.now(),
      batch: formData.get('batch'),
      rank: formData.get('rank'),
      name: formData.get('name'),
      stream: formData.get('stream'),
      quote: `"${formData.get('quote')}"`,
      aggregate: formData.get('aggregate'),
      subject: formData.get('subject'),
      image: formData.get('image') || 'https://via.placeholder.com/150',
      color: formData.get('color') || 'green'
    };
    updateContent('toppers', [...content.toppers, newTopper]);
    setIsAddingTopper(false);
    alert('Topper added successfully!');
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <div className="admin-table-container" style={{ padding: '32px' }}>
          <h3 className="font-sans-display mb-6">{editingItem.title ? 'Edit Notice' : 'Add New Notice'}</h3>
          <form onSubmit={handleSave}>
            <div className="admin-form-group">
              <label>Title</label>
              <input 
                type="text" 
                value={editingItem.title} 
                onChange={(e) => setEditingItem({...editingItem, title: e.target.value})} 
                required 
              />
            </div>
            <div className="admin-form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label>Type</label>
                <select 
                  className="admin-form-group input" 
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}
                  value={editingItem.type}
                  onChange={(e) => setEditingItem({...editingItem, type: e.target.value})}
                >
                  <option value="Admissions">Admissions</option>
                  <option value="Events">Events</option>
                  <option value="Updates">Updates</option>
                </select>
              </div>
              <div>
                <label>Date</label>
                <input 
                  type="date" 
                  value={editingItem.date} 
                  onChange={(e) => setEditingItem({...editingItem, date: e.target.value})} 
                  required 
                />
              </div>
            </div>
            <div className="admin-form-group mb-8">
              <label>Description (Optional)</label>
              <textarea rows="4" placeholder="Enter notice details..."></textarea>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Button type="submit" variant="brown">Save Changes</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      );
    }

    if (activeTab === 'notices') {
      return (
        <>
          <div className="stat-grid">
            <div className="card stat-card">
              <div className="stat-icon"><span className="material-symbols-outlined">campaign</span></div>
              <div className="stat-info">
                <h3>{notices.length}</h3>
                <p>Active Notices</p>
              </div>
            </div>
            <div className="card stat-card" style={{ borderColor: 'var(--color-green)' }}>
              <div className="stat-icon" style={{ backgroundColor: 'rgba(43,181,133,0.1)', color: 'var(--color-green)' }}><span className="material-symbols-outlined">school</span></div>
              <div className="stat-info">
                <h3>142</h3>
                <p>Applications Received</p>
              </div>
            </div>
            <div className="card stat-card" style={{ borderColor: 'var(--color-orange)' }}>
              <div className="stat-icon" style={{ backgroundColor: 'rgba(240,139,58,0.1)', color: 'var(--color-orange)' }}><span className="material-symbols-outlined">visibility</span></div>
              <div className="stat-info">
                <h3>12.4k</h3>
                <p>Website Visits</p>
              </div>
            </div>
          </div>

          <div className="admin-table-container">
            <div className="admin-table-header">
              <h3 className="font-sans-display" style={{ margin: 0, fontSize: '18px' }}>Manage Notices</h3>
              <Button variant="primary" onClick={handleAddNew} style={{ padding: '8px 16px', fontSize: '13px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', marginRight: '4px' }}>add</span>
                Add New
              </Button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id}>
                    <td style={{ fontWeight: 500 }}>{notice.title}</td>
                    <td>
                      <span style={{ 
                        padding: '4px 12px', 
                        borderRadius: '99px', 
                        fontSize: '12px',
                        backgroundColor: notice.type === 'Admissions' ? 'rgba(240,139,58,0.1)' : notice.type === 'Events' ? 'rgba(43,181,133,0.1)' : 'rgba(148,83,0,0.1)',
                        color: notice.type === 'Admissions' ? 'var(--color-orange)' : notice.type === 'Events' ? 'var(--color-green)' : 'var(--color-brown-primary)',
                        fontWeight: 600
                      }}>
                        {notice.type}
                      </span>
                    </td>
                    <td>{notice.date}</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="action-btn" onClick={() => handleEdit(notice)}>
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="action-btn" onClick={() => handleDelete(notice.id)}>
                        <span className="material-symbols-outlined text-orange">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }

    if (activeTab === 'pages') {
      return (
        <div className="admin-table-container" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px', marginBottom: '24px' }}>
            <button className={`action-btn ${editingSection === 'home' ? 'text-brown' : ''}`} style={{fontWeight: editingSection==='home'?700:500}} onClick={() => setEditingSection('home')}>Home</button>
            <button className={`action-btn ${editingSection === 'academics' ? 'text-brown' : ''}`} style={{fontWeight: editingSection==='academics'?700:500}} onClick={() => setEditingSection('academics')}>Academics</button>
            <button className={`action-btn ${editingSection === 'contact' ? 'text-brown' : ''}`} style={{fontWeight: editingSection==='contact'?700:500}} onClick={() => setEditingSection('contact')}>Contact Info</button>
            <button className={`action-btn ${editingSection === 'support' ? 'text-brown' : ''}`} style={{fontWeight: editingSection==='support'?700:500}} onClick={() => setEditingSection('support')}>Support Pages</button>
          </div>

          {editingSection === 'home' && (
            <form onSubmit={(e) => handleContentSave(e, 'home')}>
              <h3 className="font-sans-display mb-4">Edit Home Page</h3>
              <div className="admin-form-group">
                <label>Hero Title (Highlight)</label>
                <input name="heroTitleHighlight" defaultValue={content.home.heroTitleHighlight} />
              </div>
              <div className="admin-form-group">
                <label>Hero Subtitle</label>
                <textarea name="heroSubtitle" rows="3" defaultValue={content.home.heroSubtitle}></textarea>
              </div>
              <div className="admin-form-group">
                <label>Principal Name</label>
                <input name="principalName" defaultValue={content.home.principalName} />
              </div>
              <div className="admin-form-group">
                <label>Principal Quote</label>
                <textarea name="principalQuote" rows="3" defaultValue={content.home.principalQuote}></textarea>
              </div>
              <Button type="submit" variant="brown">Save Home Page</Button>
            </form>
          )}

          {editingSection === 'academics' && (
            <form onSubmit={(e) => handleContentSave(e, 'academics')}>
              <h3 className="font-sans-display mb-4">Edit Academics Page</h3>
              <div className="admin-form-group">
                <label>Science Stream Description</label>
                <textarea name="scienceDesc" rows="2" defaultValue={content.academics.scienceDesc}></textarea>
              </div>
              <div className="admin-form-group">
                <label>Commerce Stream Description</label>
                <textarea name="commerceDesc" rows="2" defaultValue={content.academics.commerceDesc}></textarea>
              </div>
              <div className="admin-form-group">
                <label>Arts Stream Description</label>
                <textarea name="artsDesc" rows="2" defaultValue={content.academics.artsDesc}></textarea>
              </div>
              <Button type="submit" variant="brown">Save Academics Page</Button>
            </form>
          )}

          {editingSection === 'contact' && (
            <form onSubmit={(e) => handleContentSave(e, 'contact')}>
              <h3 className="font-sans-display mb-4">Edit Contact Information</h3>
              <div className="admin-form-group">
                <label>Campus Address</label>
                <textarea name="address" rows="2" defaultValue={content.contact.address}></textarea>
              </div>
              <div className="admin-form-group" style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label>Phone 1</label><input name="phone1" defaultValue={content.contact.phone1} /></div>
                <div style={{flex:1}}><label>Phone 2</label><input name="phone2" defaultValue={content.contact.phone2} /></div>
              </div>
              <div className="admin-form-group" style={{display:'flex', gap:'16px'}}>
                <div style={{flex:1}}><label>Email 1</label><input name="email1" defaultValue={content.contact.email1} /></div>
                <div style={{flex:1}}><label>Email 2</label><input name="email2" defaultValue={content.contact.email2} /></div>
              </div>
              <Button type="submit" variant="brown">Save Contact Info</Button>
            </form>
          )}

          {editingSection === 'support' && (
            <form onSubmit={(e) => handleContentSave(e, 'support')}>
              <h3 className="font-sans-display mb-4">Edit Support Pages</h3>
              <div className="admin-form-group">
                <label>Career Guidance text</label>
                <textarea name="careerGuidance" rows="3" defaultValue={content.support.careerGuidance}></textarea>
              </div>
              <div className="admin-form-group">
                <label>Privacy Policy text</label>
                <textarea name="privacyPolicy" rows="5" defaultValue={content.support.privacyPolicy}></textarea>
              </div>
              <div className="admin-form-group">
                <label>Terms of Service text</label>
                <textarea name="termsOfService" rows="5" defaultValue={content.support.termsOfService}></textarea>
              </div>
              <Button type="submit" variant="brown">Save Support Pages</Button>
            </form>
          )}

        </div>
      );
    }

    if (activeTab === 'gallery') {
      if (isAddingTopper) {
        return (
          <div className="admin-table-container" style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h3 className="font-sans-display" style={{fontSize: '24px'}}>Add New Topper</h3>
              <Button variant="outline" onClick={() => setIsAddingTopper(false)}>Cancel</Button>
            </div>
            <form onSubmit={handleAddTopper} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div className="admin-form-group" style={{display:'flex', gap:'20px'}}>
                <div style={{flex:1}}><label>Name</label><input name="name" required style={{padding: '12px'}} /></div>
                <div style={{flex:1}}><label>Batch Year</label>
                  <select name="batch" required style={{width:'100%', padding:'12px', border:'1px solid var(--color-border)', borderRadius:'8px', backgroundColor: 'white'}}>
                    {batches.map(y => <option key={y} value={y}>{y} Batch</option>)}
                  </select>
                </div>
              </div>
              <div className="admin-form-group" style={{display:'flex', gap:'20px'}}>
                <div style={{flex:1}}><label>Stream (e.g. Science Stream - PCMB)</label><input name="stream" required style={{padding: '12px'}} /></div>
                <div style={{flex:1}}><label>Rank (e.g. 01)</label><input name="rank" required style={{padding: '12px'}} /></div>
              </div>
              <div className="admin-form-group" style={{display:'flex', gap:'20px'}}>
                <div style={{flex:1}}><label>Aggregate (e.g. 99.2%)</label><input name="aggregate" required style={{padding: '12px'}} /></div>
                <div style={{flex:1}}><label>Highest Subject Score (e.g. Maths: 100)</label><input name="subject" required style={{padding: '12px'}} /></div>
              </div>
              <div className="admin-form-group" style={{display:'flex', gap:'20px'}}>
                <div style={{flex:2}}><label>Image URL</label><input name="image" placeholder="https://..." required style={{padding: '12px'}} /></div>
                <div style={{flex:1}}>
                  <label>Color Theme</label>
                  <select name="color" style={{width:'100%', padding:'12px', border:'1px solid var(--color-border)', borderRadius:'8px', backgroundColor: 'white'}}>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
              </div>
              <div className="admin-form-group">
                <label>Quote</label>
                <textarea name="quote" rows="3" required style={{padding: '12px'}}></textarea>
              </div>
              <div style={{marginTop: '12px'}}>
                <Button type="submit" variant="brown" size="large" style={{width: '100%'}}>Save Topper</Button>
              </div>
            </form>
          </div>
        );
      }

      return (
        <div className="admin-table-container">
          <div className="admin-table-header">
            <h3>Manage Toppers</h3>
            <Button variant="brown" onClick={() => setIsAddingTopper(true)}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', marginRight: '8px' }}>add</span>
              Add Topper
            </Button>
          </div>
          <div style={{overflowX: 'auto'}}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Batch</th>
                  <th>Rank</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Stream</th>
                  <th>Score</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {content.toppers.map(topper => (
                  <tr key={topper.id}>
                    <td><span style={{padding: '4px 10px', backgroundColor: 'var(--color-bg-cream)', borderRadius: '99px', fontSize: '13px', fontWeight: 600, color: 'var(--color-brown-primary)'}}>{topper.batch || batches[0]}</span></td>
                    <td>#{topper.rank}</td>
                    <td>
                      <img 
                        src={topper.image} 
                        alt={topper.name} 
                        style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}} 
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(topper.name)}&background=random&color=fff&size=150`; }} 
                      />
                    </td>
                    <td style={{fontWeight: 500}}>{topper.name}</td>
                    <td>{topper.stream}</td>
                    <td>{topper.aggregate}</td>
                    <td>
                      <button className="action-btn" onClick={() => handleDeleteTopper(topper.id)} title="Delete">
                        <span className="material-symbols-outlined text-orange">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return (
      <div className="admin-table-container" style={{ padding: '48px', textAlign: 'center' }}>
        <span className="material-symbols-outlined text-muted mb-4" style={{ fontSize: '48px' }}>construction</span>
        <h3 className="font-sans-display mb-2">Module Under Construction</h3>
        <p className="text-muted">This administrative module is currently being built.</p>
      </div>
    );
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
              GS
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '14px', color: 'var(--color-navy)' }}>Geeta Science</h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>Admin Portal</p>
            </div>
          </div>
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--color-navy)' }}>
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
        
        <nav className={`admin-sidebar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => { setActiveTab('dashboard'); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
          <button className={`admin-nav-item ${activeTab === 'notices' ? 'active' : ''}`} onClick={() => { setActiveTab('notices'); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">campaign</span>
            Notices & Updates
          </button>
          <button className={`admin-nav-item ${activeTab === 'pages' ? 'active' : ''}`} onClick={() => { setActiveTab('pages'); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">edit_document</span>
            Pages Content
          </button>
          <button className={`admin-nav-item ${activeTab === 'applications' ? 'active' : ''}`} onClick={() => { setActiveTab('applications'); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">school</span>
            Applications
          </button>
          <button className={`admin-nav-item ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => { setActiveTab('gallery'); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">photo_library</span>
            Toppers Gallery
          </button>
          <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '16px 0' }}></div>
          <button className="admin-nav-item" onClick={() => { setActiveTab('settings'); setIsMobileMenuOpen(false); }}>
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h2 className="admin-header-title" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <img src="/logo.png" alt="Geeta Science" style={{height: '40px', width: 'auto'}} />
            {activeTab === 'dashboard' && 'Dashboard Overview'}
            {activeTab === 'notices' && 'Manage Notices'}
            {activeTab === 'pages' && 'Edit Website Pages Content'}
            {activeTab === 'applications' && 'Admissions & Applications'}
            {activeTab === 'gallery' && 'Toppers Gallery CMS'}
            {activeTab === 'settings' && 'Site Settings'}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-navy)', textDecoration: 'underline' }} className="admin-back-link">Back to Website</Link>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-navy)' }}>Welcome, Admin</span>
            <Button variant="outline" onClick={handleLogout} style={{ padding: '8px 16px', fontSize: '13px' }}>Logout</Button>
          </div>
        </header>
        
        <div className="admin-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
